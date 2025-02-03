import LoginPage from '../pages/LoginPage';
import RecipientPage from '../pages/RecipientPage';
import LogoutPage from '../pages/LogoutPage';

describe('Scopex Money App Tests', () => {
  before(() => {
    cy.visit(Cypress.env('BASE_URL')); 
    cy.xpath("//button[@type='button' and @aria-haspopup='dialog']").click();
    cy.xpath("//button[@data-testid='login-button']").click();
  });

  it('Login -> Add Recipient -> Logout', () => {
    LoginPage.login();
    cy.fixture('recipientData').then((data) => {
      RecipientPage.addRecipient(data.name, data.nickname, data.account, data.ifsc);
    });
    cy.wait(10000);
    LogoutPage.logout();
  });

});