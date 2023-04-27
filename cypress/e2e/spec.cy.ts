import type {} from 'cypress';

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

  it('Form Page', () => {
    cy.visit('/');
    cy.get('a[href="/forms"]').click();
    cy.url().should('include', '/forms');
    cy.get('input[name="name"]').type('Nazar');
    cy.get('input[name="birthday"]').type('1997-01-01');
    cy.get('input[type="radio"][value="Male"]').check();
    cy.get('select[name="country"]').select('Ukraine');
    cy.get('input[type="checkbox"][name="agreement"]').check();
    cy.get('input[type="file"]').selectFile('./cypress/fixtures/logo.png');
    cy.get('button[type="submit"]').click();
    cy.contains('User has been successfully added!');
  });

  it('Modal', () => {
    cy.visit('/');
    cy.get('article:first').click();
    cy.get('p')
      .should('contain', 'Owner:')
      .should('contain', 'Height:')
      .should('contain', 'Width:')
      .should('contain', 'Url:');
  });
});
