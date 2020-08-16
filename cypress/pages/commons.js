class commons {

    static pageMustHave(text){
        cy.contains(text).should('be.visible')  
    }

}

export default commons;
