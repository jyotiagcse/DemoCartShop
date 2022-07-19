/// <reference types="Cypress" />

import {And, Given, Then, When} from 'cypress-cucumber-preprocessor/steps'
import {utilsPage} from "../../../../../pageObjects/Utils";
import { productListPage } from "../../../../../pageObjects/ProductListPage";
import {productDetailPage} from "../../../../../pageObjects/ProductDetailPage";
import {shoppingCartPage} from "../../../../../pageObjects/ShoppingCartPage";
import {checkoutPage} from "../../../../../pageObjects/CheckoutPage";

Given(/^I opened the shop$/, () => {
  cy.log('Navigate to the shop')
  productListPage.navigateToShop();

});

And(/^products and categories are available$/, () => {
  productListPage.validateCategoriesAndProductsAvailability()
});

Given(/^I search for the (.*) and add it to shopping cart$/, (product) => {
  cy.splitAndTrim(product, ',').then((productArray) => {
    for (const item of productArray) {
      productListPage.searchProduct(item)
      productListPage.openRandomProductOnTheList()
      productDetailPage.addProductToTheCart()
      shoppingCartPage.validateMiniCartIsNotZero()
    }
  })
});

When(/^I click on checkout button$/, function () {
  utilsPage.clickOnElementWithWaitAndStatus(shoppingCartPage.getMiniCartCountLocator(), 'exist')
  utilsPage.clickOnElementWithWaitAndStatus(shoppingCartPage.getProceedToCheckoutButtonLocator(), 'exist')

});

Then(/^Checkout page is displayed successfully$/, function () {
  checkoutPage.validateLandingInCheckoutPage()
});