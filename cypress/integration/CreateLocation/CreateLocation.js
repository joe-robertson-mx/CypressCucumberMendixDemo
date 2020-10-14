import { Given, Then, And } from "cypress-cucumber-preprocessor/steps"; 
//These could both be reusable steps but for the purposes of this test project they are specific
And ('I select the Advanced level', () => {
    cy.get(`[value="Advanced"]`).first().click()
  })

And ('I select the Basic level', () => {
    cy.get(`[value="Basic"]`).first().click()
  })