describe('app-spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits the initial project page', () => {
    cy.get('h1').should('contain', 'Hello');
  })
})
