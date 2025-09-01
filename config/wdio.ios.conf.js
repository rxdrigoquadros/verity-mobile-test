// config/wdio.ios.conf.js
const { config } = require('./wdio.shared.conf');
const path = require('path');

config.port = 4723;

config.capabilities = [{
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'appium:deviceName': 'iPhone 14 Test',
    'appium:platformVersion': '16.4', // Ajuste conforme necessário
    'appium:app': path.join(process.cwd(), './apps/NativeDemoApp.app'),
    'appium:noReset': true,
    'appium:newCommandTimeout': 240,
}];

exports.config = config;