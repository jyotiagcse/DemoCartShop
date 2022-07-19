/// <reference types="Cypress" />

import {basePage} from "./BasePage";
import {utilsPage} from "./Utils";
import {fail} from "assert";

 class ProductListPage {

  //*******************************************************************
  //*** Locators
  //*******************************************************************

  getSearchIconLocator(){
    return '[class="ty-search-magnifier"]'
  }

  getSearchProductLocator(){
    return '[id="search_input"]'
  }

  getSearchedProductLinkLocator() {
    return '[class="ut2-gl__image"]'
  }

  getCategoryLocator() {
    return '[id="sw_dropdown_2090"]'
  }

  getProductLinkLocator() {
    return '[class="ut2-gl__item col5"]'
  }

  //*******************************************************************
  //*** Methods
  //*******************************************************************

     // This method will open any of the product available in searched product result
  openRandomProductOnTheList() {
    const selectionLocator =this.getSearchedProductLinkLocator()
    utilsPage.waitUntilElementIsWithStatus(selectionLocator, 'exist').then(products => {
      let selected = Cypress._.random(products.length - 1)
      cy.wrap(products).eq(selected).find('a').first().click({force: true})
    })
  }

  // This method will open the website in browser
  navigateToShop() {
    return basePage.visitPage(Cypress.env('url'))
  }

     // This method will check that products and categories are displayed in PLP
  validateCategoriesAndProductsAvailability() {
    utilsPage.waitUntilElementIsWithStatus(this.getCategoryLocator(), 'exist')
    cy.log('Categories dropdown is present.')

    utilsPage.getElementIfHaveStatus(this.getProductLinkLocator(), 'exist').then((element) => {
      if (element.length > 0) {
        cy.log('Products are available.')
      } else {
        cy.log('Products are not available. Test data issue')
        fail()
      }
    })
  }

  // This method will search for a product
  searchProduct(product) {
    utilsPage.clickOnElementWithWaitAndStatus(this.getSearchProductLocator(),'exist')
    utilsPage.typeValueIntoElementIfExist(this.getSearchProductLocator(),product,150)
    utilsPage.clickOnElementWithStatus(this.getSearchIconLocator(),'exist')
  }
}

export const productListPage = new ProductListPage()
