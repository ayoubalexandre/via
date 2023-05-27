import { beforeEach } from 'mocha'
import commands from '../../support/commands'
import messages from '../../support/messages'

beforeEach(() => {
    cy.acessarSite()
})

//validação do acesso ao site das casas bahia
it('Validar site casas bahia', () => {
    cy
        .title()
        .should('be.equal', messages.TITULO.HOME)
})