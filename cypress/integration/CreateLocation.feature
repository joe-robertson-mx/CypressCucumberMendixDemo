Feature: Program test

   # Background: This runs before every scenario
  Background: Log in as Admin
    Given I open the application
    And I enter "MxAdmin" in "#usernameInput"
    And I enter "1" in "#passwordInput"
    And I click the button containing "Sign in"
    Then I am logged in

@dataUpdate
Scenario: Update Program Name
    Given I see "Training portal" in the title
    When I click the button containing "Programme management"
    Then I see "Programme management" in the title
    And I highlight "M101" in the datagrid
    And I click the button containing "Edit"
    And I enter " Advanced" in the "titleInput" field
    And I select the Advanced level
    And I click the button containing "Save"
    Then I see "Mendix Development Advanced" in the datagrid

Scenario: Program clean up
    Given I see "Training portal" in the title
    When I click the button containing "Programme management"
    Then I see "Programme management" in the title
    And I highlight "M101" in the datagrid
    And I click the button containing "Edit"
    And I clear the field called "titleInput"
    And I enter "Mendix Development" in the "titleInput" field
    And I select the Basic level
    And I click the button containing "Save"
    Then I see "Mendix Development" in the datagrid

