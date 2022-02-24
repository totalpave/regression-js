
module.exports  = {
    preset: 'ts-jest',
    verbose: true,
    collectCoverage: true,
    testMatch: ['**/spec/**/*.spec.ts'],
    collectCoverageFrom: ['./src/**/*.ts'],
    testRunner: 'jest-jasmine2'
};
