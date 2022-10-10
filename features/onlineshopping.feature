Feature: SignUp,SignIn and Purchase the Product

   Scenario: TC001-Create new user/SignUP
    Given I am on the home page
    Then Navigate to SignUp Page
    And Create an account with random username
    
  Scenario: TC002-Sign in with newly created credentials
    Given I am on the sign in page
    When login with the newly created credentials
    Then I shall verify the address information in my addresses
  
  # Scenario: TC-003 Add product to online cart and checkout
  #   Given I am on the Sign In page
  #   When Login using newly created credentials
  #   When I add below products to cart
  #           | category | subCategory    | name                        | model  | quantity |
  #           | Dresses  | Casual Dresses | Printed Dress               | demo_3 | 2        |
  #           | Women    | Tops           | Faded Short Sleeve T-shirts | demo_1 | 3        |
  #   Then I shall validate shopping cart as below
  #           | name                        | model        | quantity |
  #           | Printed Dress               | SKU : demo_3 | 2        |
  #           | Faded Short Sleeve T-shirts | SKU : demo_1 | 3        |       
  #   Then I shall be able to Buy the product
  #   And I shall be able to Buy using cheque payment