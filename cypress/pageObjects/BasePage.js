class BasePage {

  visitPage(url) {
    cy.log(url)
    cy.visit(url)
  }

}
export const basePage = new BasePage()
