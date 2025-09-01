// config/wdio.android.conf.js
const { config } = require('./wdio.shared.conf');
const path = require('path');

config.port = 4723;

config.capabilities = [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'emulator-5554',
    'appium:platformVersion': '10.0',
    'appium:app': path.join(process.cwd(), './apps/Android-NativeDemoApp-0.4.0.apk'),
    'appium:noReset': true,
    'appium:newCommandTimeout': 240,
    'appium:skipServerInstallation': true,
    'appium:skipDeviceInitialization': true,
}];

exports.config = config;