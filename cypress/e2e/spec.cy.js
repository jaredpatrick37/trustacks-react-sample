describe('template spec', () => {
  beforeEach(() => {
    cy.visit({
      url: "http://host.docker.internal:50123",
    });
  });

  it("add todo", () => {
    cy.get(".NewTodo input").type("take out the trash").type("{enter}");
    cy.contains("take out the trash")
      .should("not.have.css", "text-decoration", "line-through solid rgb(255, 255, 255)")
      .should("not.have.attr", "checked");
  });

  it("complete todo", () => {
    cy.get(".NewTodo input").type("take out the trash").type("{enter}");
    cy.get(".Todo input[type='checkbox']")
      .click()
      .should("have.attr", "checked");
    cy.contains("take out the trash").should("have.css", "text-decoration", "line-through solid rgb(255, 255, 255)");
  });

  it("delete todo", () => {
    cy.get(".NewTodo input").type("take out the trash").type("{enter}");
    cy.get(".NewTodo input").type("wash the dishes").type("{enter}");
    cy.get(".NewTodo input").type("cut the grass").type("{enter}");

    cy.contains("take out the trash").should("exist");
    cy.contains("wash the dishes").should("exist");
    cy.contains("cut the grass").should("exist");

    cy.contains("wash the dishes").parent().children("button.Delete").click();

    cy.contains("take out the trash").should("exist");
    cy.contains("wash the dishes").should("not.exist");
    cy.contains("cut the grass").should("exist");
  });
});