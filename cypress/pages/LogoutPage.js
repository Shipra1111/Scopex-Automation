class LogoutPage {
    elements = {
      topMenuButton: () => cy.xpath("//button[@class='dashboard-top-menu flex justify-end items-center w-full rounded-md text-sm font-medium text-gray-700 ']"),
      logoutButton: () => cy.xpath("(//a[normalize-space()='Log out'])[1]")
    };
  
    logout() {
      this.elements.topMenuButton().click();
      this.elements.logoutButton().click();
      cy.screenshot('logout-success');
    }
  }
  
  export default new LogoutPage();