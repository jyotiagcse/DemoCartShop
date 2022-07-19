Feature: Checkout Page

  In order to purchase products in the shop
  As a user
  I want to add different products in cart

  Background:
    Given I opened the shop
    And products and categories are available

  @smoke
  Scenario Outline: Purchase <product>
    Given I search for the <product> and add it to shopping cart
    When I click on checkout button
    Then Checkout page is displayed successfully

    Examples:
      |product|
      |coffee machine,LCD|

