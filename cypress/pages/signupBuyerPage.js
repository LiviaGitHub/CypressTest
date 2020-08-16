class signupBuyerPage {

    static clickSignUp(){
        cy.contains('Sign Up').click().reload()
        // To prevent frame bursting I need to force a reload before the offending code runs
        // It doesn't worked 100%, making the tests flaky
        // the ideal solution would be to remove or disable during tests
        // any `window.top || window.self` redirect
        cy.visit('/')
    }

    static enterUserEmail(text){
        cy.get('#email').type(text)
    }

    static enterPassword(){
        cy.fixture('defaultData').then(defaultData => {
            cy.get('#password').type(defaultData.password)}) 
    }
}

export default signupBuyerPage;
