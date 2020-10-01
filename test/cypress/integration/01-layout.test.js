describe("home page", () => {
  beforeEach(() => {
    // visit root baseURL
    cy.visit("/");
  });

  it("header should have 8 anchor tags", () => {
    cy.get("header a").should("have.length", 6);
  });
});
