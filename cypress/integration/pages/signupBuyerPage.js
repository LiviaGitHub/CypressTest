class signupBuyerPage {

    static checkUrl(){
        cy.url().should('include', '/signup/buyer')
    }

    static enterEmail(){
        cy.get('#email').type('rasdsd@random.com')
    }

    static enterPassword(){
        cy.fixture('defaultData').then(defaultData => {
            cy.get('#password').type(defaultData.password)})
    }

    static clickSignUp(){
        //cy.get('#TEST_SIGNUP_BUTTON').click
        //cy.contains('Sign Up').click()
        cy.get('button').contains('Sign Up').click()
    }
}

export default signupBuyerPage;