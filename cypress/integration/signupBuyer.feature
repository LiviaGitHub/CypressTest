Feature: Buyer Sign up 

    As an new user, I want to sign up as a buyer on EyeEm.

    @buyer @signup
    Scenario: Assert a successful sign up for a Buyer
    Given I open EyeEm.com
    When I go to Lets get you started screen
    And I click For Image Buyers 
    And I enter my email
    And I enter my password
    And I click on Sign Up
    Then I am logged in as a Buyers
