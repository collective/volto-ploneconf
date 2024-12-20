describe('content type tests', () => {
  beforeEach(() => {
    cy.intercept('GET', `/**/*?expand*`).as('content');
    cy.createUser({
      username: 'editor',
      fullname: 'Editor',
      roles: ['Member', 'Reader', 'Contributor'],
    });
    cy.visit('/');
    cy.wait('@content');
  });

  afterEach(() => {
    cy.removeUser('editor', 'password');
  });

  it('As editor I can add a talk.', function () {
    cy.autologin('editor', 'password');

    cy.visit('/');
    cy.wait('@content');

    // when I add a talk with title, type and details
    cy.get('#toolbar-add').click();
    cy.get('#toolbar-add-talk').click();
    // title
    cy.get('input[name="title"]')
      .type('Security in Plone')
      .should('have.value', 'Security in Plone');
    // type of talk
    cy.get(
      '#field-type_of_talk > .react-select__control > .react-select__value-container',
    )
      .click()
      .type('talk{enter}');
    // details
    cy.get('.field-wrapper-details .slate-editor').type('This is the text.');
    cy.get('#toolbar-save').click();

    // Then a new talk should have been created
    cy.url().should('eq', Cypress.config().baseUrl + '/security-in-plone');
    // Then the title should read 'Talk: Security in Plone' with the type of talk mentioned
    cy.get('body').contains('Talk: Security in Plone');
  });
});
