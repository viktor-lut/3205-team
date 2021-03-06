exports.config = {

  // ====================
  // Runner Configuration
  // ====================

  runner: 'local',
  //
  specs: [
    './test/specs/lending.js'
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
  }],

  // ===================
  // Test Configurations
  // ===================

  logLevel: 'info',

  bail: 0,

  baseUrl: 'http://3205.today',

  waitforTimeout: 10000,

  connectionRetryTimeout: 90000,

  connectionRetryCount: 3,

  services: ['selenium-standalone'],

  framework: 'mocha',

  reporters: ['dot', 'spec', 'allure'],
  reporterOptions: {
    allure: {
      outputDir: 'allure-results'
    }
  },

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    compilers: ['js:@babel/register']
  },
  //
  // =====
  // Hooks
  // =====
};
