import { browser } from "protractor";

import { After, Before, Status } from "cucumber";

// This will run before each scenario
Before({timeout: 100 * 1000}, async function() {

  // Opens the website to the default URL in the 'protractor.config.ts' file
  await browser.get("");

});

After({timeout: 100 * 1000}, async function(scenario) {

  if (scenario.result.status === Status.FAILED) {
    // screenShot is a base-64 encoded PNG
     const screenShot = await browser.takeScreenshot();
     this.attach(screenShot, "image/png");
}
});