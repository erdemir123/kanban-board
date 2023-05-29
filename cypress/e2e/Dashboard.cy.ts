describe("my app", () => {

    it("can select/add products to the cart and then checkout", () => {
      cy.visit("http://localhost:3000");
      cy.contains("Trello Kanban Board");
      cy.get('body').should('have.css','background-color', 'rgb(255, 69, 0)')
    });
  });