class eyeEmHomePage {

    static visitHomePage(){
        cy.visit('/');
    }

    static clickSignUp(){
        //cy.get('.css-qg4ofo').click();
        cy.contains('Signup').click()
    }
}

export default eyeEmHomePage;