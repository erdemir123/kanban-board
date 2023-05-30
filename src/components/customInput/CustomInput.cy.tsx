import React from "react";
import CustomInput from "./CustomInput";


describe("<CustomInput />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    const props = {
      displayClass: "app-boards-add-board",
      editClass: "app-boards-add-board-edit",
      placeholder: "Enter Board Name",
      text: "Add Board",
      buttonText: "Add Board",
      onSubmit: cy.stub().as("addboardHandler"),
    };
    cy.mount(<CustomInput {...props} />);
    cy.get(".custom-input-display").contains("Add Board").should('have.css','width', '200px').click()
    cy.get(".buttonAdd").click();
  });
});
