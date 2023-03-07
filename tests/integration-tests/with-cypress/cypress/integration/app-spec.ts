describe('app-spec', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Hello')
  })
})
