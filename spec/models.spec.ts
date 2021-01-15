
import * as __models from './support/data';
import {Regression} from '../src/Regression';
import RegressionFactory, { IBestFitResult } from '../src/RegressionFactory';
import RegressionType from '../src/utils/RegressionType';

let models: any = __models;

describe('models', () => {
    let factory: RegressionFactory = new RegressionFactory();
    Object.keys(models).forEach((model: string) => {
        describe(model, () => {
            Object.keys(models[model]).forEach((name: string) => {
                let example: any = models[model][name];
                describe(name, () => {
                    it(`correct predicts ${name}`, () => {
                        let fitResults: IBestFitResult = factory.bestFit(<RegressionType>model, example.data, example.config);
                        let regression: Regression = fitResults.regression;
                        expect(regression.getEquation()).withContext('getEquation').toBe(example.string);
                        expect(regression.getCoefficients()).withContext('getCoefficients').toEqual(example.equation);
                        expect(fitResults.r2).withContext('r2').toEqual(example.r2);
                    });
                });
            });
        });
    });
});
