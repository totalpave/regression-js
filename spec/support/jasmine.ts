
import Jasmine = require('jasmine');
import {SpecReporter} from 'jasmine-spec-reporter';

var jasmine = new Jasmine(null);

const spec: string = process.argv[2] ? process.argv[2] : '**/*[sS]pec.ts';

const config: any = {
    spec_dir: 'spec',
    spec_files: [
        '!**/node_modules/**',
        spec
    ],
    random: false,
    stopSpecOnExpectationFailure: false
};

jasmine.env.clearReporters();
jasmine.addReporter(new SpecReporter());

jasmine.loadConfig(config);

jasmine.execute();
