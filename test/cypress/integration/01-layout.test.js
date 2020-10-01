describe("home page", () => {
  beforeEach(() => {
    // visit root baseURL
    cy.visit("/");
  });

  it('should have text "A community of creative minds driving the Open Source movement in Africa"', () => {
    cy.contains("A community of creative minds driving the Open Source movement in Africa");
  });

  it("header should have 8 anchor tags", () => {
    cy.get("header a").should("have.length", 6);
  });
});
