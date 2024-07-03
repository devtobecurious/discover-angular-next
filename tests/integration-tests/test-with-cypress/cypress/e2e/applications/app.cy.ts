describe('App Component Form Test', () => {
  beforeEach(() => {
    cy.visit('/'); // Adjust URL if your app is served at a different path
  });

  it('accepts input in the form', () => {
    const typedName = 'John Doe';
    const typedEmail = 'john@example.com';

    cy.get('input[name="name"]').type(typedName).should('have.value', typedName);
    cy.get('input[name="email"]').type(typedEmail).should('have.value', typedEmail);
  });

  it('displays confirmation message upon form submission', () => {
    const typedName = 'John Doe';
    const typedEmail = 'john@example.com';

    cy.get('input[name="name"]').type(typedName);
    cy.get('input[name="email"]').type(typedEmail);
    cy.get('form').submit();
    cy.get('p').should('contain', `Thank you`);
  });
});
