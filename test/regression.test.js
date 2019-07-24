/* eslint-env node, mocha */

import { expect } from 'chai';
import * as models from './data';
import regression from '../src/regression';

const { _round } = regression;

describe('round', () => {
  it('rounds to the correct precision', () => {
    expect(_round(0.33333333333333333333, 9)).to.equal(0.333333333);
  });
});

describe('models', () => {
  Object.keys(models).forEach((model) => {
    describe(model, () => {
      Object.keys(models[model]).forEach((name) => {
        const example = models[model][name];
        describe(name, () => {
          it(`correctly predicts ${name}`, () => {
            const result = regression[model](example.data, example.config);
            delete result.predict;
            delete result.serialize;
            expect(result).to.deep.equal({
              r2: example.r2,
              string: example.string,
              points: example.points,
              equation: example.equation,
            });
          });

          it('should correctly forecast data points', () => {
            const result = regression[model](example.data, example.config);
            expect(result.predict(example.predicted[0])).to.deep.equal(example.predicted);
          });

          it('should take precision options', () => {
            const notSpecified = regression[model](example.data, example.config);
            const specified = regression[model](example.data, { ...example.config, precision: 4 });
            expect(specified.equation).to.deep.equal(example.equation.map(v => _round(v, 4)));
            expect(notSpecified.equation).to.deep.equal(example.equation.map(v => _round(v, 2)));
          });
        });
      });
    });
  });
});

describe('can serialize', () => {
  it('Polynomial', () => {
    const result = regression.polynomial([
      [0, 100],
      [1, 96],
      [2, 92],
      [6, 75],
      [7, 63],
    ]);

    const serialized = result.serialize();
    const parsed = regression.parse(serialized);

    delete parsed.predict;
    delete parsed.serialize;
    delete result.predict;
    delete result.serialize;

    expect(parsed).to.deep.equal(result);
  });
});
