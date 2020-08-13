import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import eyeEmHomePage from '/Users/liviabonifacio/Documents/eyeem-task2/eyeEm-project/cypress/integration/pages/homepage.js'
import signUpPage from '/Users/liviabonifacio/Documents/eyeem-task2/eyeEm-project/cypress/integration/pages/signupPage.js'
import signupBuyerPage from '/Users/liviabonifacio/Documents/eyeem-task2/eyeEm-project/cypress/integration/pages/signupBuyerPage.js'

Given('I open EyeEm.com', () => {
    eyeEmHomePage.visitHomePage()
})

When('I click the Sign Up button', () => {
    //eyeEmHomePage.clickSignUp();
    cy.visit('https://www.eyeem.com/signup')
})

Then('I go to Lets get you started screen', () => {
    signUpPage.checkUrl()
    signUpPage.clickForImageBuyers()
}) 

When('I enter my email', () => {
    signupBuyerPage.enterEmail()
})

And('I enter my password', () => {
    cy.fixture('defaultData').then(defaultData => {
        signupBuyerPage.enterPassword(defaultData.password)})
})

And('I click on Sign Up', () => {
    signupBuyerPage.clickSignUp()
})

