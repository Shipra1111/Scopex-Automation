# Cypress Automation Project

## Overview

This project contains automated tests for the Scopex Money App using Cypress.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Cypress](https://www.cypress.io/) (installed via npm)
- A GitHub repository to store your project

## Project Setup

1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/cypress-automation.git
   ```
2. Navigate to the project directory:
   ```sh
   cd cypress-automation
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Configuration

Environment variables are set in `cypress.config.js`. Update them as needed:

```js
module.exports = defineConfig({
  e2e: {
    env: {
      EMAIL: 'your-email@example.com',
      PASSWORD: 'your-password',
      BASE_URL: 'https://scopex.money/'
    }
  }
});
```

## Running Tests

To open Cypress Test Runner:

```sh
npx cypress open
```

To run tests in headless mode:

```sh
npx cypress run
```

## Test Execution

This project includes the following test scenarios:

- **Login Test**: Logs into the application.
- **Add Recipient Test**: Adds a recipient using test data from `fixtures/recipientData.json`.
- **Logout Test**: Logs out from the application.

## Reporting

MochaAwesome is used for generating reports.
To generate test reports:

```sh
npx cypress run --reporter mochaawesome
```

Reports are stored in the `cypress/reports` directory.

## Bug Reporting

If you encounter any issues, create a detailed bug report in GitHub Issues with:

- Steps to reproduce
- Expected result
- Actual result
- Screenshots (if applicable)

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.



