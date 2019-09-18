import { Given, Then, When } from "cucumber";

import { AddProductPage } from "../page_objects/add-product.page";
import { HomePage } from "../page_objects/home.page";
import { ViewProductPage } from "../page_objects/view-product.page";

const homePage: HomePage = new HomePage();
const addProductPage: AddProductPage = new AddProductPage();
const viewProductPage: ViewProductPage = new ViewProductPage();

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;


Given('a product doesn\'t exist', async function (dataTable) {
    const arrayOfProducts = dataTable.hashes();
this.product = arrayOfProducts[0];

while (await homePage.productsInTable(this.product).count() > 0) {
    homePage.productInTable(this.product).click();
    viewProductPage.deleteButton.click();
   }

return expect(homePage.productInTable(this.product).isPresent()).to.eventually.be.false;
  });

  When('I add the product', function () {
    homePage.addProduct.click();
    addProductPage.productName.sendKeys(this.product.name);
    addProductPage.productDescription.sendKeys(this.product.description);
    addProductPage.productPrice.sendKeys(this.product.price);
  
    return addProductPage.submitButton.click();
  });  

  Then('the product is created', function () {
      // Expect that the product has now been created and can be seen on the View Product Page.
  return expect(viewProductPage.productName(this.product).isPresent()).to.eventually.be.true;
  });