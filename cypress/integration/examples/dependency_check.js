// Integration tests
// 1.Arrange - setup initial app state
// 2.Act - take an action
// 3.Assert - make an assertion

// Legend for configuration
// table
// height
// monitor
// blende
// technik

// Legend for single configuration
// Small - S
// Middle - M
// Large - L
// Eco - E
// Vario - V
// Monitor 1-reihig - 1
// Monitor 2-reihig - 2
// Stativ - SM
// Reling - ohne HV - F
// Reling - mit HV - H
// Blende - ohne - XB
// Blende voll - B
// Technik - einseitig - ET
// Technik - beidseitig - BT
// Technik - keine - XT
// Technik Ladencontainer - ML
// Technik ohne Container - XL


describe('Dependencies: Stativsystem ☓ Blende', function () {
    it('ALERT: Blendsystem not choosable, getting X out of it', function () {
        cy.visit('localhost:3000');
        cy.viewport(1920, 1021);
        cy.get('#close').click();
        cy.get('[data-cy=table]').click();
        cy.get('[data-cy=S]').click();
        cy.get('[data-cy=height]').click();
        cy.get('[data-cy=E]').click();
        cy.get('[data-cy=monitor]').click();
        cy.get('[data-cy=1]').click();
        cy.get('[data-cy=SM]').click();
        cy.get('[data-cy=blende]').click()
    })
});

describe('Dependencies: Ladencontainer', function () {
    it('Choosing Beidseitig lead to ProductCode', function () {
        cy.visit('localhost:3000');
        cy.viewport(1920, 1021);
        cy.get('#close').click();
        cy.get('[data-cy=table]').click();
        cy.get('[data-cy=S]').click();
        cy.get('[data-cy=height]').click();
        cy.get('[data-cy=E]').click();
        cy.get('[data-cy=monitor]').click();
        cy.get('[data-cy=1]').click();
        cy.get('[data-cy=F]').click();
        cy.get('[data-cy=blende]').click();
        cy.get('[data-cy=B]').click();
        cy.get('[data-cy=technik]').click()
        cy.get('[data-cy=BT]').click()
    })
});


