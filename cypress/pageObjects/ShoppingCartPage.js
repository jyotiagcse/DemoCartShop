/// <reference types="Cypress" />

import {utilsPage} from "./Utils";

class ShoppingCartPage {

  //*******************************************************************
  //*** Locators
  //*******************************************************************

  getMiniCartCountLocator() {
    return '[class="ty-minicart-count"]'
  }

  getProceedToCheckoutButtonLocator() {
    return '[class="ty-btn ty-btn__primary "]'
  }

  //*******************************************************************
  //*** Methods
  //*******************************************************************

  // This method will validate that cart is not empty after product is added in cart
  validateMiniCartIsNotZero() {
    cy.log("Validate mini cart count is not zero.")
    utilsPage.waitUntilElementIsWithStatus(this.getMiniCartCountLocator(), 'exist').then((elem) => {
      if (elem === null) {
        cy.log('MiniCart count is zero')
      } else {
        const count = parseInt(elem.text())
        cy.wrap(count).should('be.gt', 0)
      }
    })
  }
}

export const shoppingCartPage = new ShoppingCartPage()
