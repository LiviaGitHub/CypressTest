class loggedHomePage {

    static clickAccount(){
        cy.get('[title="Account"]').should('be.visible')
        cy.get('[title="Account"]').click()
    }
}

export default loggedHomePage;