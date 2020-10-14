# CypressCucumberMendixDemo
A starter project for automated testing using Cypress with a Cucumber preprocessor for Mendix

Kick off
Either fork this project or follow steps below.

	1. Create a new folder
	2. Navigate to the folder from the command line ("cd folder")
	3. Run npm init
	4. Install Cypress 
	npm install cypress --save-dev
	5. Add nodemodules to Git ignore
	6. Add easy to run commands by adding 
	"scripts": {
	    "test": "cypress run --spec \"**/*.feature\"",
	    "test:all": "cypress run --spec \"**/*.features\"",
	    "cy:run": "./node_modules/.bin/cypress run",
	    "cy:start": "./node_modules/.bin/cypress open"
	  },
	, to your package.json
	7. Run cy:open
	8. Install Cypress Cucumber Preprocessor
	npm install --save-dev cypress-cucumber-preprocessor
	9. Add 
	
	const cucumber = require('cypress-cucumber-preprocessor').default
	 
	module.exports = (on, config) => {
	  on('file:preprocessor', cucumber())
	}
	
	To your cypress/plugins/index.js file
	10. Add feature file support to cypress config by updating cypress.json to contain. Additional recommended configs are shown below.
	
	{
	  "ignoreTestFiles": "*.js",
	  "testFiles": "**/*.{feature,features}",
	  "video": false,
	  "chromeWebSecurity": false,
	  "experimentalSourceRewriting": true
	}
	
	11. Add the following to your package.json file
	
	"cypress-cucumber-preprocessor": {
	  "nonGlobalStepDefinitions": true
	}
	12. Add  Cypress file upload npm install cypress-file-upload  --save-dev
	13. To use common step definitions copy the file CommonStepDefs.js from this project and paste into integration/common
	14. Create your feature files in the integration folder
	15. To use specific step defs: create a folder with the same name as the feature file and a .js file of the same name. These steps will only be available to this feature.

Running tests
        1. Ensure the Advanced_Mendix project is running locally
        2. Navigate to the root of the Cypress project folder using VSCode or command line
        3. Run "npm run cy:start"
        4. Open the Cypress interface
        5. Click the test you want to run
        6. Watch it run in the browser




Known issues:
	• When reloading Mendix project, Cypress is often slow to refresh. If you wait a minute it usually resolves itself. For this reason running headless always seems to fail.
	• Timeout issues also on free tier of Mendix. Pages seem to just fail to load in time. Increasing timeout does not fix issue.
	• If you allow users to have multiple concurrent sessions, Cypress can make you run out of licenses and force rerun of project.
	• Selecting multiple items on a datagrid does not seem to be possible. CTRL click does not work.
	• Unsure yet how to target:
		a. Elements with a tooltip
		b. Items that do not produce HTML elements (e.g. JS graphs)
	
Best practices:
	• Store all file dependencies in cypress/fixtures
	• Build reusable steps as much as possible
	• Name elements in Mendix to facilitate interaction
	• Clean up data as final step

Essential additional documentation
Cypress cucumber preprocessor https://www.npmjs.com/package/cypress-cucumber-preprocessor
Cypress https://docs.cypress.io/guides/getting-started/
