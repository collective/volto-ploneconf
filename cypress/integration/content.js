describe('Add talk tests', () => {
  beforeEach(() => {
    // given a logged in editor and the site root
    cy.autologin();
    cy.visit('/');
    cy.waitForResourceToLoad('@navigation');
    cy.waitForResourceToLoad('@breadcrumbs');
    cy.waitForResourceToLoad('@actions');
    cy.waitForResourceToLoad('@types');
    cy.waitForResourceToLoad('?fullobjects');
  });
  it('As editor I can add a talk.', function () {
    // when I add a talk with title, type and details
    cy.get('#toolbar-add').click();
    cy.get('#toolbar-add-talk').click();
    cy.get('input[name="title"]')
      .type('Respect')
      .should('have.value', 'Respect');
    cy.get(
      '#default-type_of_talk .react-select-container > .react-select__control .icon',
    )
      .click()
      .type('Talk{enter}');
    cy.get('#default-details .public-DraftEditor-content')
      .type('Mention your co workers.')
      .get('span[data-text]')
      .contains('Mention your co workers.');
    cy.get('#toolbar-save').click();

    // then a new talk should have been created
    cy.url().should('eq', Cypress.config().baseUrl + '/respect');
    cy.get('body').contains('Respect');
    cy.get('body').contains('Mention your co workers.');
  });
});
