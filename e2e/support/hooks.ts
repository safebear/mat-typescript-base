import { browser } from "protractor";

import { After, Before, Status } from "cucumber";

import { Actions } from "../support/actions";
import { Checks } from "../support/checks";
import { Waits } from "../support/waits";

// This will run before each scenario
Before({timeout: 100 * 1000}, async function() {

  this.actions = new Actions();
  this.checks = new Checks();
  this.waits = new Waits();

  // Opens the website to the default URL in the 'protractor.config.ts' file
  await this.actions.openWebsite();

});

After({timeout: 100 * 1000}, async function(scenario) {

  if (scenario.result.status === Status.FAILED) {
    // screenShot is a base-64 encoded PNG
     const screenShot = await browser.takeScreenshot();
     this.attach(screenShot, "image/png");
}
});