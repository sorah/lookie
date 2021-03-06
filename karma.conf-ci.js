// Karma configuration
// Generated on Thu Aug 14 2014 04:56:24 GMT+0900 (JST)
var fs = require('fs');

module.exports = function(config) {
  // Use ENV vars on Travis and sauce.json locally to get credentials
  if (!process.env.SAUCE_USERNAME) {
    if (!fs.existsSync('sauce.json')) {
      console.log('Create a sauce.json with your credentials based on the sauce-sample.json file.');
      process.exit(1);
    } else {
      process.env.SAUCE_USERNAME = require('./sauce').username;
      process.env.SAUCE_ACCESS_KEY = require('./sauce').accessKey;
    }
  }

  // Browsers to run on Sauce Labs
  var customLaunchers = {
    // Chrome
    'SL_Chrome_Mac': {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'OS X 10.9',
    },
    // Firefox
    'SL_Firefox_Mac': {
      base: 'SauceLabs',
      browserName: 'firefox',
      platform: 'OS X 10.9',
    },
    // Safari
    'SL_Safari_7': {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'OS X 10.9',
      version: '7'
    },
    // Internet Explorer
    'SL_IE_7': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows XP',
      version: '7'
    },
    'SL_IE_8': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '8'
    },
    'SL_IE_9': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 7',
      version: '9'
    },
    'SL_IE_10': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8',
      version: '10'
    },
    'SL_IE_11': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    },
    // iOS
    'SL_iOS_7': {
      base: 'SauceLabs',
      browserName: 'iphone',
      platform: 'OS X 10.9',
      version: '7.1'
    },
    // Android
    'SL_Android_4_4': {
      base: 'SauceLabs',
      browserName: 'android',
      platform: 'linux',
      version: '4.4'
    },
    // Opera
    'SL_Opera': {
      base: 'SauceLabs',
      browserName: 'opera',
      platform: 'linux',
      version: '12'
    }
  };

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      "test/json.js",
      "test/**/*.js"
    ],

    browserify: {
      files: [
        "test/**/*.js"
      ]
    },


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/*': ['browserify']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    sauceLabs: {
      testName: 'magnet-inc/lookie',
      tag: process.env.TRAVIS_TAG || '',
      build: process.env.TRAVIS_BUILD_NUMBER || +(new Date()),
      startConnect: false,
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
    },
    browserNoActivityTimeout: 100000,
    captureTimeout: 120000,

    customLaunchers: customLaunchers,
    browsers: [],

    autoWatch: false,
    singleRun: true
  });
};
