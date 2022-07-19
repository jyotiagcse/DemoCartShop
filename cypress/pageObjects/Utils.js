class Utils {

  //*******************************************************************
  //*** Methods - DOM Elements
  //*******************************************************************

  /**
   *
   * @param locator
   * @param status -> status we want to validate. examples:
   *  exist
   *  be.enabled
   *  be.disable
   *  be.visible
   *
   * @returns {Cypress.Chainable<JQuery<*>>}
   */
  getElementIfHaveStatus(locator, status) {
    let elem = cy.get(locator)
    elem.should(status)
    return elem
  }

  /**
   *
   * @param locator
   * @param status -> status we want to validate. examples:
   *  exist
   *  be.enabled
   *  be.disable
   *  be.visible
   *
   *  @returns {Cypress.Chainable<JQuery<*>>}
   */
  waitUntilElementIsWithStatus(locator, status) {
    cy.waitUntil(() => {
      return this.getElementIfHaveStatus(locator, status)
    })
    return this.getElementIfHaveStatus(locator, status)
  }

  clickOnElementWithWaitAndStatus(locator, status) {
    this.waitUntilElementIsWithStatus(locator, status).click({force: true})
  }

  typeValueIntoElementIfExist(locator, value, typeDelay) {
    this.waitUntilElementIsWithStatus(locator, 'exist').scrollIntoView()
      .type(value, {
        force: true,
        delay: typeDelay
      })
      .should('have.value', value)
  }

  clickOnElementWithStatus(locator, status) {
    this.getElementIfHaveStatus(locator, status).click({force: true})
  }

  clickOnFirstElementWithStatus(locator, status) {
    this.getElementIfHaveStatus(locator, status).first().click({force: true})
  }

}

export const utilsPage = new Utils()
