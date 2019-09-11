import { browser, ElementFinder, ElementArrayFinder } from "protractor";

export class Checks {

    /**
     * Used to check to see if an element is on the page.
     *
     * @param element - the element that you're looking for on the page.
     * @returns true if the element is present, false if it isn't.
     */
    public isElementOnPage = async (element: ElementFinder): Promise<boolean> => {
      return await browser.isElementPresent(element);
    }

        /**
     * Count number of multiple elements onscreen
     *
     * @param elements - an ElementArrayFinder of multiple elements
     * @returns True if there are more than 0 elements on the page, False otherwise
     */
    public checkForElements = async (elements: ElementArrayFinder): Promise<boolean> => {
        return await elements.count() > 0;
      }
}