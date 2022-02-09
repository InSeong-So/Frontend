Cypress.Commands.add('getCounterDisplay', count => {
  return cy.get('#counter-display').should('have.text', `${count}`);
});

Cypress.Commands.add('countIncrement', () => {
  return cy.get('#increment-button').click();
});

Cypress.Commands.add('countDecrement', () => {
  return cy.get('#decrement-button').click();
});

Cypress.Commands.add('countReset', () => {
  return cy.get('#reset-button').click();
});

Cypress.Commands.add('countAsyncIncrement', () => {
  return cy.get('#increment-button-async').then($btn => {
    cy.wrap($btn).click();
  });
});

Cypress.Commands.add('countAsyncDecrement', () => {
  return cy.get('#decrement-button-async').then($btn => {
    cy.wrap($btn).click();
  });
});

Cypress.Commands.add('countAsyncReset', () => {
  return cy.get('#reset-button-async').then($btn => {
    cy.wrap($btn).click();
  });
});
