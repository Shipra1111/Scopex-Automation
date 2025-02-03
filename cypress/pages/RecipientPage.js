class RecipientPage {
    elements = {
      menuButton: () => cy.xpath("//button[@type='button' and @aria-controls='mobile-menu']"),
      recipientBtn: () => cy.xpath("//span[p[text()='Recipients']]"),
      addRecipientBtn: () => cy.xpath("//a[p[text()='Add Recipient']]"),
      nameInput: () => cy.xpath("//input[@placeholder='Enter recipient name']"),
      nickNameInput: () => cy.xpath("//input[@placeholder='Enter recipient nick name']"),
      accountInput: () => cy.xpath("//input[@placeholder='Enter bank account number']"),
      ifscCodeInput: () => cy.xpath("//input[@placeholder='Enter IFSC code']"),
      countryDropdown: () => cy.xpath("//select[@name='country']"),
      selectCountry: () => cy.xpath("//option[@value='India']"),
      submitButton: () => cy.xpath("//button[normalize-space()='Submit']"),
      confirmButton: () => cy.xpath("//button[text()='Confirm']")
    };
  
    addRecipient(name,nickname,account,ifsccode) {
      this.elements.menuButton().click();
      this.elements.recipientBtn().click();
      this.elements.addRecipientBtn().click();
      this.elements.nameInput().type(name);
      this.elements.nickNameInput().type(nickname);
      this.elements.accountInput().type(account);
      this.elements.ifscCodeInput().type(ifsccode);
      this.elements.countryDropdown().select("India", { force: true });
      this.elements.submitButton().click();
      this.elements.confirmButton().click();
      cy.screenshot('recipient-added');
    }
  }
  
  export default new RecipientPage();