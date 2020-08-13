class signUpPage {

    static checkUrl(){
        cy.url().should('include', '/signup')
    }

    static clickForImageBuyers(){
        //cy.get('.exaf7ac0 css-gpxg3f-StyledBox eqclr3s0'); 
        cy.contains('For Image Buyers').click()
    }
}

export default signUpPage;