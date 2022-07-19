import './commands'

import chaiSorted from "chai-sorted"

import '@cypress/skip-test/support'

chai.use(chaiSorted)

//Turn off all uncaught exception handling
Cypress.on('uncaught:exception', () => {
  return false
})

beforeEach(() => {
  cy.window().then((window) => {
    window.location.href = 'about:blank'
    window.sessionStorage.clear();
    window.localStorage.clear();
  })
})
