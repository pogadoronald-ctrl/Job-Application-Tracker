describe("Dashboard Page", () => { 
    beforeEach(() => {
        cy.visit("/");
    });
/*
    it("should display the Dashboard Page", () => {
        cy.contains("Dashboard").should("be.visible");
    });

    it("should display Total Applications", () => {
        cy.contains("Total Applications").should("be.visible");
    });

    it("should display Interviews", () => {
        cy.contains("Interviews").should("be.visible");
    });

    it("should display Offers", () => {
        cy.contains("Offers").should("be.visible");
    });

    it("should display Rejected", () => {
        cy.contains("Rejected").should("be.visible");
    });

    it("should display Application Status", () => {
        cy.contains("Application Status").should("be.visible");
    });

    it("should display Rate Metrics", () => {
        cy.contains("Interview Rate").should("be.visible");
        cy.contains("Rejected Rate").should("be.visible");
        cy.contains("Offer Rate").should("be.visible");
        cy.contains("Withdrawn Rate").should("be.visible");
    }); */

    it("should update Total Application statistics when an application is added", () => {
        cy.clearLocalStorage();
        cy.visit("/applications/add");

        cy.get('input[name="company"]').type("Test Company");
        cy.get('input[name="position"]').type("Test Position");
        cy.get('input[name="location"]').type("Test Location");
        cy.get('select[name="status"]').select("Applied");
        cy.get('select[name="employmentType"]').select("Full-time");
        cy.get('input[name="dateApplied"]').type("2026-09-16");
        cy.get('input[name="jobLink"]').type("https://example.com");
        cy.get('input[name="salary"]').type("25000");
        cy.get('textarea[name="notes"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        
        cy.contains("button", "Add Application").click();
        cy.contains("button", "Confirm").click();
        cy.contains("button", "Done").click();

        cy.visit("/");

        cy.contains("Total Applications")
            .parent()
            .should("contain", "1");
    })

    it("should update Interviews statistics when an application is added", () => {
        cy.clearLocalStorage();
        cy.visit("/applications/add");

        cy.get('input[name="company"]').type("Test Company");
        cy.get('input[name="position"]').type("Test Position");
        cy.get('input[name="location"]').type("Test Location");
        cy.get('select[name="status"]').select("Interview");
        cy.get('select[name="employmentType"]').select("Full-time");
        cy.get('input[name="dateApplied"]').type("2026-09-16");
        cy.get('input[name="jobLink"]').type("https://example.com");
        cy.get('input[name="salary"]').type("25000");
        cy.get('textarea[name="notes"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        
        cy.contains("button", "Add Application").click();
        cy.contains("button", "Confirm").click();
        cy.contains("button", "Done").click();

        cy.visit("/");

        cy.contains("Interviews")
            .parent()
            .should("contain", "1");
    });

        it("should update Offers statistics when an application is added", () => {
        cy.clearLocalStorage();
        cy.visit("/applications/add");

        cy.get('input[name="company"]').type("Test Company");
        cy.get('input[name="position"]').type("Test Position");
        cy.get('input[name="location"]').type("Test Location");
        cy.get('select[name="status"]').select("Offer");
        cy.get('select[name="employmentType"]').select("Full-time");
        cy.get('input[name="dateApplied"]').type("2026-09-16");
        cy.get('input[name="jobLink"]').type("https://example.com");
        cy.get('input[name="salary"]').type("25000");
        cy.get('textarea[name="notes"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        
        cy.contains("button", "Add Application").click();
        cy.contains("button", "Confirm").click();
        cy.contains("button", "Done").click();

        cy.visit("/");

        cy.contains("Offers")
            .parent()
            .should("contain", "1");
    });

        it("should update Rejected statistics when an application is added", () => {
        cy.clearLocalStorage();
        cy.visit("/applications/add");

        cy.get('input[name="company"]').type("Test Company");
        cy.get('input[name="position"]').type("Test Position");
        cy.get('input[name="location"]').type("Test Location");
        cy.get('select[name="status"]').select("Rejected");
        cy.get('select[name="employmentType"]').select("Full-time");
        cy.get('input[name="dateApplied"]').type("2026-09-16");
        cy.get('input[name="jobLink"]').type("https://example.com");
        cy.get('input[name="salary"]').type("25000");
        cy.get('textarea[name="notes"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        
        cy.contains("button", "Add Application").click();
        cy.contains("button", "Confirm").click();
        cy.contains("button", "Done").click();

        cy.visit("/");

        cy.contains("Rejected")
            .parent()
            .should("contain", "1");
    });



});