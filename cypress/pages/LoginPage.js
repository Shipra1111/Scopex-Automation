class LoginPage {
    elements = {
      emailInput: () => cy.xpath("//input[@id=':r3:-form-item']"),
      passwordInput: () => cy.xpath("//input[@type='password']"),
      loginButton: () => cy.xpath("//button[normalize-space()='Log in']"),
    };
  
    login() {
      this.elements.emailInput().type(Cypress.env('EMAIL'));
      this.elements.passwordInput().type(Cypress.env('PASSWORD'));
      this.elements.loginButton().click();
      cy.screenshot('login-attempt');
    }
  }
  
  export default new LoginPage();