describe('Add Content Tests', () => {
  beforeEach(() => {
    // give a logged in editor and the site root
    cy.autologin();
    cy.visit('/');
    cy.waitForResourceToLoad('@navigation');
    cy.waitForResourceToLoad('@breadcrumbs');
    cy.waitForResourceToLoad('@actions');
    cy.waitForResourceToLoad('@types');
    cy.waitForResourceToLoad('?fullobjects');
  });
  it('As editor I can add a talk.', function () {
    // when I add a talk
    cy.get('#toolbar-add').click();
    // cy.get('#toolbar-add-talk-item').click();
    // cy.get('input[name="title"]')
    //   .type('Security in Plone')
    //   .should('have.value', 'Security in Plone');
    // cy.get('input[name="type_of_talk"]')
    //   .check('Talk')
    //   .should('have.value', 'Talk');
    // cy.get('input[name="details"]')
    //   .type('description of the talk')
    //   .should('have.value', 'description of the talk');
    // cy.get('#toolbar-save').click();

    // // then a new talk should have been created
    // cy.url().should('eq', Cypress.config().baseUrl + '/security-in-plone');
    // cy.get('.navigation .item.active').should('have.text', 'Security in Plone');
  });
});
