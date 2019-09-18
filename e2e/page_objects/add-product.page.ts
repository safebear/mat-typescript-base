import { $, by, element, ElementFinder } from "protractor";

export class AddProductPage {

  public productName = $("#mat-input-0");
  public productDescription = $("#mat-input-1");
  public productPrice = $("#mat-input-2");
  public submitButton = $("[type=submit]");

}