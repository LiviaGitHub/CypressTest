Feature: Buyer Sign up 

    As an new user, I want to sign up as a buyer on EyeEm.

    Scenario: Assert a successful sign up for a Buyer
    Given I open EyeEm.com
    When I click the Sign Up button
    Then I go to Lets get you started screen
    When I enter my email
    And I enter my password
    And I click on Sign Up

