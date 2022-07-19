import 'cypress-wait-until';


/**
 * @memberof cy
 * @method splitAndTrim
 * @param {string} stringToSplit
 * @param {string} separator
 * @param {*} [args]
 */
Cypress.Commands.add('splitAndTrim', (stringToSplit, separator) => {
    return stringToSplit.split(separator).map(item => item.trim())
})


/**
 * @memberof cy
 * @method log
 * @param {string} subject
 * @param {string} message
 * @param {*} [args]
 */
Cypress.Commands.overwrite('log', (subject, message) =>
        cy.task('log', message)
)