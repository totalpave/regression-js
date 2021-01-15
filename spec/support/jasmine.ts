
import Jasmine = require('jasmine');
import {SpecReporter} from 'jasmine-spec-reporter';

let jasmine = new Jasmine(null);

let spec: string = process.argv[2] ? process.argv[2] : '**/*[sS]pec.ts';

let config: any = {
    spec_dir: 'spec',
    spec_files: [ '!**/node_modules/**', spec ],
    random: false,
    stopSpecOnExpectationFailure: false
};

jasmine.env.clearReporters();
jasmine.addReporter(<any>(new SpecReporter()));

jasmine.loadConfig(config);

jasmine.execute();
