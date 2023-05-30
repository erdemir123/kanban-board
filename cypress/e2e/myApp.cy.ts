describe("my app", () => {

    it("can select/add products to the cart and then checkout", () => {
      cy.visit("http://localhost:3000/")
      cy.contains("Trello Kanban Board");
      cy.get('body').should('have.css','background-color', 'rgb(255, 69, 0)');
      cy.get('body').should('have.css','background-size', 'cover');
      cy.get('body').should('have.css','background-position', '50% 50%');
      cy.get('body').should('have.css','background-repeat', 'no-repeat');
      cy.get('.header').should('have.css',"font-size","30px");
      cy.get('[role="button"]')
    });
  });