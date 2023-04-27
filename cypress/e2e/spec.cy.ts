describe('template spec', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('Main Page', () => {
    cy.visit('/');

    cy.get('a[href="/"]').should('be.visible').contains('Main');
    cy.get('a[href="/about"]').should('be.visible').contains('About');
    cy.get('a[href="/forms"]').should('be.visible').contains('Form');
    cy.get('input[type="search"]')
      .should('be.visible')
      .invoke('attr', 'placeholder')
      .should('contain', 'Search Picture');
  });

  it('About Page', () => {
    cy.visit('/');

    cy.get('a[href="/about"]').click();

    cy.url().should('include', '/about');
    cy.get('h2').contains('About');
  });
});
