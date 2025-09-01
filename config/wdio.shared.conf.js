// config/wdio.shared.conf.js
exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [],
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    
    // NÃO usar appium-service quando rodando com Appium externo
    services: [],
    
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    // Hooks
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await driver.takeScreenshot();
        }
    }
};