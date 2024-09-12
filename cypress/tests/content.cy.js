describe('Add talk tests', () => {
  beforeEach(() => {
    // given a logged in editor and the site root
    cy.autologin();
  });
  it('As editor I can add a talk.', function () {
    cy.visit('/');
    // when I add a talk with title, type and details
    cy.get('#toolbar-add').click();
    cy.get('#toolbar-add-talk').click();
    cy.get('input[name="title"]')
      .type('Security in Plone')
      .should('have.value', 'Security in Plone');
    cy.get(
      '#default-type_of_talk .react-select-container > .react-select__control .icon',
    )
      .click()
      .type('Talk{enter}');
    cy.get('#default-details .public-DraftEditor-content')
      .type('This is the text.')
      .get('span[data-text]')
      .contains('This is the text.');
    cy.get('#toolbar-save').click();

    // then a new talk should have been created
    cy.url().should('eq', Cypress.config().baseUrl + '/security-in-plone');
    cy.get('body').contains('Security in Plone');
    cy.get('body').contains('This is the text.');
  });
});
