describe("Applications page", () => {
    beforeEach(() => {
        cy.visit("/applications");
    });

    it("should display the Applications page", () => {
        cy.contains("Applications").should("be.visible");
    });
});