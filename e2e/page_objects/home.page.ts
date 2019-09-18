import { $, by, element, ElementFinder, ElementArrayFinder } from "protractor";

export class HomePage {

  public addProduct = $(".mat-flat-button.mat-primary");
  public productInTable = (product: myLib.Product) => {
    return element(by.cssContainingText(".mat-cell", product.name));
  };
  public productsInTable= (product: myLib.Product) => {
    return element.all(by.cssContainingText(".mat-cell", product.name));
  };


}