const { config } = require('./wdio.shared.conf');
const path = require('path');

config.specs = ['./test/specs/**/*.js'];

config.capabilities = [{
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:platformVersion': '13.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(process.cwd(), './apps/Android-NativeDemoApp-0.4.0.apk'),
    'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
    'appium:newCommandTimeout': 240
}];

exports.config = config;