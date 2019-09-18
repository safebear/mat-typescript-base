import { browser, ElementFinder } from "protractor";
import { Waits } from "./waits";

const waits: Waits = new Waits();

export class Actions {

  /**
   * Used to open the website in the browser.
   *
   * @remarks
   * The 'get' command is empty, as the default url is set in the 'protractor.conf.ts' file.
   */
  public openWebsite = () => {
    return browser.get("");
  }

    /**
     * Used to click on an element on the webpage
     *
     * @param element - the element on the webpage you want to click on (e.g. button)
     * @returns Promise <void>
     */
    public click = async (element: ElementFinder): Promise <void> => {
      return await element.click();
    }

    /**
     * Used to type text into a field
     *
     * @param element - the element on the webpage you want to type in (e.g. an text field)
     */
    public type = async (element: ElementFinder, text: string): Promise <void> => {
      return await element.sendKeys(text);
    }
}