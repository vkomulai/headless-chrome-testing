const webdriverio = require('webdriverio');

describe('fetching Wunderdog instagram page', () => {
  it('renders in headless chrome', async () => {
    await webdriverio
        .remote({
            port: 4444,
            host: '127.0.0.1',
            desiredCapabilities: {
                browserName: 'chrome'
            }
        })
        .init()
        .url('https://www.instagram.com/wunderdogsw/')
        .saveScreenshot('./snapshot.png')
        .end();

  }).timeout(10000);
})
