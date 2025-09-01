const { config } = require('./wdio.shared.conf');
const path = require('path');

config.specs = ['./test/specs/**/*.js'];

config.capabilities = [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 14',
    'appium:platformVersion': '16.0',
    'appium:automationName': 'XCUITest',
    'appium:app': path.join(process.cwd(), './apps/iOS-Simulator-NativeDemoApp-0.4.0.app'),
    'appium:newCommandTimeout': 240
}];

exports.config = config;