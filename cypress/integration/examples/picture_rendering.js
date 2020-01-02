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

describe('Picture Rendering: TTV.SE1HXBX', function () {
    it('Correct ProductDisplay', function () {
        cy.visit('localhost:3000');
        cy.viewport(1920, 1021);
        cy.get('#close').click();
        cy.get('[data-cy=table]').click();
        cy.get('[data-cy=S]').click();
        cy.get('[data-cy=height]').click();
        cy.get('[data-cy=E]').click();
        cy.get('[data-cy=monitor]').click();
        cy.get('[data-cy=1]').click();
        cy.get('[data-cy=H]').click();
        cy.get('[data-cy=blende]').click();
        cy.get('[data-cy=XB]').click();
        cy.get('[data-cy=technik]').click();
        cy.get('[data-cy=BT]').click();
        cy.contains('TTV.SE1HXBX')
    })
});

describe('Picture Rendering: TTV.MV1FBXX', function () {
    it('Correct ProductDisplay', function () {
        cy.visit('localhost:3000');
        cy.viewport(1920, 1021);
        cy.get('#close').click();
        cy.get('[data-cy=table]').click();
        cy.get('[data-cy=M]').click();
        cy.get('[data-cy=height]').click();
        cy.get('[data-cy=V]').click();
        cy.get('[data-cy=monitor]').click();
        cy.get('[data-cy=1]').click();
        cy.get('[data-cy=F]').click();
        cy.get('[data-cy=blende]').click();
        cy.get('[data-cy=B]').click();
        cy.get('[data-cy=technik]').click();
        cy.get('[data-cy=XT]').click();
        cy.get('[data-cy=XL]').click();
        cy.contains('TTV.MV1FBXX')
    })
});

describe('Picture Rendering: TTV.LV1FXEL', function () {
    it('Correct ProductDisplay', function () {
        cy.visit('localhost:3000');
        cy.viewport(1920, 1021);
        cy.get('#close').click();
        cy.get('[data-cy=table]').click();
        cy.get('[data-cy=L]').click();
        cy.get('[data-cy=height]').click();
        cy.get('[data-cy=V]').click();
        cy.get('[data-cy=monitor]').click();
        cy.get('[data-cy=1]').click();
        cy.get('[data-cy=F]').click();
        cy.get('[data-cy=blende]').click();
        cy.get('[data-cy=XB]').click();
        cy.get('[data-cy=technik]').click();
        cy.get('[data-cy=ET]').click();
        cy.get('[data-cy=ML]').click();
        cy.contains('TTV.LV1FXEL')
    })
});

describe('Picture Rendering: TTV.SV2SXEX', function () {
    it('Correct ProductDisplay', function () {
        cy.visit('localhost:3000');
        cy.viewport(1920, 1021);
        cy.get('#close').click();
        cy.get('[data-cy=table]').click();
        cy.get('[data-cy=S]').click();
        cy.get('[data-cy=height]').click();
        cy.get('[data-cy=V]').click();
        cy.get('[data-cy=monitor]').click();
        cy.get('[data-cy=2]').click();
        cy.get('[data-cy=SM]').click();
        cy.get('[data-cy=technik]').click();
        cy.get('[data-cy=ET]').click();
        cy.get('[data-cy=XL]').click();
        cy.contains('TTV.SV2SXEX')
    })
});

describe('Picture Rendering: TTV.ME2HBBX', function () {
    it('Correct ProductDisplay', function () {
        cy.visit('localhost:3000');
        cy.viewport(1920, 1021);
        cy.get('#close').click();
        cy.get('[data-cy=table]').click();
        cy.get('[data-cy=M]').click();
        cy.get('[data-cy=height]').click();
        cy.get('[data-cy=E]').click();
        cy.get('[data-cy=monitor]').click();
        cy.get('[data-cy=2]').click();
        cy.get('[data-cy=H]').click();
        cy.get('[data-cy=blende]').click();
        cy.get('[data-cy=B]').click();
        cy.get('[data-cy=technik]').click();
        cy.get('[data-cy=BT]').click();
        cy.get('[data-cy=XL]').click();
        cy.contains('TTV.ME2HBBX')
    })
});

describe('Picture Rendering: TTV.LV2SXEL', function () {
    it('Correct ProductDisplay', function () {
        cy.visit('localhost:3000');
        cy.viewport(1920, 1021);
        cy.get('#close').click();
        cy.get('[data-cy=table]').click();
        cy.get('[data-cy=L]').click();
        cy.get('[data-cy=height]').click();
        cy.get('[data-cy=V]').click();
        cy.get('[data-cy=monitor]').click();
        cy.get('[data-cy=2]').click();
        cy.get('[data-cy=SM]').click();
        cy.get('[data-cy=technik]').click();
        cy.get('[data-cy=ET]').click();
        cy.get('[data-cy=ML]').click();
        cy.contains('TTV.LV2SXEL')
    })
});