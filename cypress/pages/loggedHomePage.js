class loggedHomePage {

    static clickAccount(){
        cy.reload()
        cy.get('[title="Account"]').should('be.visible')
        cy.get('[title="Account"]').click()
    }
}

export default loggedHomePage;