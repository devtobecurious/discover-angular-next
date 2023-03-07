describe('wookies-spec', () => {
  it('should display pages', () => {
    cy.visit('/wookies')
    cy.contains('Wookies')
  })
})
