Feature: SignUp,SignIn and Purchase the Product

   Scenario: TC001-Create new user/SignUP
    Given I am on the home page
    Then Navigate to SignUp Page
    And Create an account with random username
    
  Scenario: TC002-Sign in with newly created credentials
    Given I am on the sign in page
    When login with the newly created credentials
    Then I shall verify the address information in my addresses