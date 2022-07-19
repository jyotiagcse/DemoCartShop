/// <reference types="Cypress" />

import {utilsPage} from "./Utils";

class CheckoutPage {

  //*******************************************************************
  //*** Locators
  //*******************************************************************

  getCheckoutPageTitleLocator() {
    return '[class="litecheckout__page-title"]'
  }
  getOrderProductLocator() {
    return '[class="ty-sidebox order-products"]'
  }
  getCheckOutSummaryLocator() {
    return '[class="ty-checkout-summary"]'
  }


  //*******************************************************************
  //*** Methods
  //*******************************************************************

  // This method will check whether checkout page is displayed or not
  validateLandingInCheckoutPage() {
    utilsPage.waitUntilElementIsWithStatus(this.getCheckoutPageTitleLocator(),'exist')
    utilsPage.waitUntilElementIsWithStatus(this.getOrderProductLocator(),'exist')
    utilsPage.waitUntilElementIsWithStatus(this.getCheckOutSummaryLocator(),'exist')
  }
}

export const checkoutPage = new CheckoutPage()
