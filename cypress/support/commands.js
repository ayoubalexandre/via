// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Acesso à home page casas bahia
Cypress.Commands.add('acessarSite', () => {
    cy.intercept('**', (req) => {
      req.headers['user-agent'] = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36';
      req.headers['Connection'] = 'keep-alive';
      req.headers['sec-ch-ua'] = '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"';
      req.headers['Sec-Fetch-Mode'] = "cors";
      req.headers['Sec-Fetch-Site'] = "cross-site";
      req.headers['Origin'] = 'https://www.casasbahia.com.br'
      req.headers['Referer'] = 'https://www.casasbahia.com.br/'
    }).as('intercept');
  
    cy.visit('https://www.casasbahia.com.br/');
  });
