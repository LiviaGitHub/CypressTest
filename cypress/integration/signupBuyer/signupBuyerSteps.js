import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import eyeEmHomePage from '../../pages/homepage.js'
import signUpPage from '../../pages/signupPage.js'
import signupBuyerPage from '../../pages/signupBuyerPage.js'
import commons from '../../pages/commons.js'
import faker from 'faker'
import loggedHomePage from "../../pages/loggedHomePage.js"

const user_email = faker.internet.email()

Given('I open EyeEm.com', () => {
    eyeEmHomePage.visitHomePage()
})

When('I go to Lets get you started screen', () => {
    cy.visit('/signup')
})

And('I click For Image Buyers', () => {
    signUpPage.clickForImageBuyers()
}) 

And('I enter my email', () => {
    signupBuyerPage.enterUserEmail(user_email)
})

And('I enter my password', () => {
    signupBuyerPage.enterPassword()
})

And('I click on Sign Up', () => {
    signupBuyerPage.clickSignUp()
})

Then('I am logged in as a Buyers', () => {
    loggedHomePage.clickAccount()
    commons.pageMustHave(user_email)
})

