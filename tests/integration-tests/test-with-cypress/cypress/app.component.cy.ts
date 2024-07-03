import { AppComponent } from "../src/app/app.component"

describe('app.component.cy.ts', () => {
  it('playground', () => {
    const mount = cy.mount(AppComponent)
    //mount.find('h1').should('Welcome')
    cy.get('h1').should('have.text', 'Welcome')

    cy.get('button').click()
    cy.get('i').should('have.text', 'Hello')
  })
})
