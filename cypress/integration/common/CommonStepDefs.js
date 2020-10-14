import { Given, Then, And } from "cypress-cucumber-preprocessor/steps"; 
import 'cypress-file-upload';

const url = "http://localhost:8081/login.html?profile=Responsive";
// const url = "https://advancedmendix-sandbox.mxapps.io/login.html?profile=Responsive"
Given(`I open the application`, () => {
  cy.visit(url);
});

Then (`I am logged in`, () => {
    cy.url().should('include', 'index').as('loggedIn')
})

//Generic navigation

And (`I click the button containing {string}`, (buttonString) => {
  cy.wait (200)
  cy.contains (buttonString).click({force:true})
})

And (`I click the button called {string}`, (selector) => {
  cy.wait (200)
  cy.get(`.mx-name-${selector}`).click({ multiple: true })
})

And (`I click the button called {string} and wait {int}`, (selector, wait) => {
  cy.wait (200)
  cy.get(`.mx-name-${selector}`).click()
  cy.wait (wait)
})

And(`I click the tab called {string}`, (selector) => {
  cy.wait (200)
  cy.get(`.mx-name-${selector}`).click()
})

// Generic wait period to avoid creating new steps
And(`I wait for {int}`, (number) => {
  cy.wait(number)
})

// Generic element that can be used for any widgets, e.g. datagrid buttons, tab containers, etc
And(`I click the widget element with ID {string}`, (selector) => {
  cy.wait (200)
  cy.get(`#mxui_widget_${selector}`).click()
})

And(`I enter {string} in the widget element with ID {string}`, (text, selector) => {
  cy.wait (200)
  cy.get(`#mxui_widget_${selector}`).type (text)
})

//Form filling
And (`I enter {string} in {string}`, (text, selectorName) => {
  cy.wait (200)
  cy.get (selectorName).type (text)
  })

And (`I enter {string} in the {string} field`, (text, selectorName) => {
  cy.wait (200)
  cy.get (`.mx-name-${selectorName}`).type (text)
  })
  
And (`I enter {string} in the {string} field box`, (text, selectorName) => {
  cy.wait (200)
  cy.get (`.mx-name-${selectorName} input`).click().type (text)
  })
  
And (`I clear the widget element with ID {string}`, (selector) => { 
  cy.wait(200)
  cy.get(`#mxui_widget_${selector}`).type('.')
  cy.focused().clear()
})

And (`I clear the field called {string}`, (selectorName) => { 
  cy.wait(200)
  cy.get(`.mx-name-${selectorName}`).type('.')
  cy.focused().clear()
})
  
And ('I select {string} from {string}', (value, selector) => {
  cy.get(selector).select(value)
  cy.wait(500)
})

And ('I select {string} from the widget {string}', (value, selectorName) => {
  cy.get(`#mxui_widget_${selectorName} select`).select(value)
})

And ('I toggle {string} radio button to true', (name) => {
  cy.get (`.mx-name-${name}`).within(() => {
    cy.get(`[value="true"]`).click()
  })
})

And ('I toggle {string} radio button to false', (name) => {
  cy.get (`.mx-name-${name}`).within(() => {
    cy.get(`[value="false"]`).click()
  })
})

And ('I confirm the {string} radio button is true', (name) => {
  cy.get (`.mx-name-${name}`).within(() => {
    cy.get(`[value="true"]`)
  })
})

And ('I confirm the {string} radio button is false', (name) => {
  cy.get (`.mx-name-${name}`).within(() => {
    cy.get(`[value="false"]`)
  })
})

And ('I toggle Active radio button', () => {
  cy.get(`[value="false"]`).first().click()
})

//Generic tests
Given (`I see {string} in the title`, title => {
  cy.wait (200)
  cy.get('.mx-name-title').should("contain",title);
})

Given (`I see the {string} page title`, (name) => {
  cy.wait (200)
  cy.get(`.mx-name-${name}`);
})

Then (`I see {string} in the header`, title => {
  cy.wait (500)
  cy.get('h4').should("contain",title);
})


Then ('I confirm that {string} contains {string}', (selector, text) => {
  cy.get(`.mx-name-${selector}`).contains(text)
})

Then ('I confirm that the text contains {string}', (text) => {
  cy.get(`.mx-text`).contains(text)
})

// List views
Then ('I see {string} in the list', (value) => {
  cy.wait(200)
  cy.get('.mx-listview').should("contain", value)
})

// Datagrids
Then ('I delete {string} from the datagrid', (title) => {
  cy.get(`[title=${title}]`).first().click()
  cy.contains ('Delete').click()
  cy.contains ('OK').click()
  cy.wait (500)
})

And ('I highlight {int} items in the datagrid called {string} and click', (num, name) => {
  cy.wait (200)
  cy.get('.mx-name-${name}').find().click()
  cy.wait (200)
})

And ('I highlight {string} and {string} in the datagrid and click', (title1, title2) => {
  cy.wait (200)
  cy.get(`[title=${title1}]`).get (`[title=${title2}]`).click({ctrlKey:true})
  cy.wait (200)
  // THIS DOES NOT WORK (NO IDEA WHY)
})

Then ('I see {string} in the datagrid', (title) => {
  cy.wait (200)
  cy.get(`[title="${title}"]`).should("contain", title)
})

Then ('I see {string} in the datagrid called {string}', (title, name) => {
  cy.wait (200)
  cy.get(`.mx-name-${name}`).should("contain", title)
})

Then ('the datagrid has {int} rows', (rowNo) => {
  cy.get('tbody').find('tr').should('have.length', rowNo)
})

Then ('the datagrid called {string} has {int} rows', (name, rowNo) => {
  cy.get(`.mx-name-${name} tbody`).find('tr').should('have.length', rowNo)
})

And ('I highlight {string} in the datagrid {string}', (title, datagrid) => {
  cy.wait (200)
  cy.get (datagrid).find(`[title="${title}"]`).first().click()
})

And ('I highlight {string} in the datagrid called {string}', (title, name) => {
  cy.wait (200)
  cy.get (`.mx-name-${name}`).find(`[title=${title}]`).first().click()
})

And ('I highlight {string} in the datagrid', (title) => {
  cy.wait (200)
  cy.get (`[title=${title}]`).first().click()

})

// Excel uploads

And ('I upload a {string} excel file', fileName => {
  cy.fixture(`${fileName}.xlsx`, 'binary')
    .then(Cypress.Blob.binaryStringToBlob)
    .then(fileContent => {
      cy.get('input[type=file]').attachFile({
        fileContent,
        fileName: `${fileName}.xlsx`,
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        encoding: 'utf8'
      })
  })
})


Then ('I see error {string}', (title) => {
  cy.get(`[title=${title}]`).click()
})

Then ('I get {int} errors', (int) => {
  cy.get('.mx-name-Errors tbody tr').should('have.length', int)
})


Then ('I get {int} Dues in', (int) => {
  cy.get('.mx-name-DuesInTracker tbody tr').should('have.length', int)
})
