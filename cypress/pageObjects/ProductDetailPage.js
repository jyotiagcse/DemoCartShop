import {utilsPage} from "./Utils";

class ProductDetailPage {

  //*******************************************************************
  //*** Locators
  //*******************************************************************

  getAddToCartButtonLocator() {
    return '[id^="button_cart"]'
  }

  //*******************************************************************
  //*** Methods
  //*******************************************************************

  // This method will add the selected product in cart
  addProductToTheCart() {
    cy.log("Adding product to cart.")
    utilsPage.clickOnFirstElementWithStatus(this.getAddToCartButtonLocator(), 'be.enabled')
  }

  }

export const productDetailPage = new ProductDetailPage()
