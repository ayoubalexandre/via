import commandsNavigation from "../../support/commandsNavigation"
import messages from "../../support/messages"
import commands from "../../support/commands"
import locators from "../../support/locators"
import 'cypress-real-events/support';

beforeEach(() => {
    cy.acessarSite()
})

describe('Adicionar produtos ao carrinho', () => {
    //Adicionar produto ao carrinho
    it('Adiconar produto existente', () => {
        cy.buscaProduto(messages.PRODUTOS.GELADEIRA)
        cy.selecionarItem()
        cy.clicarComprar()
        cy.itemCarrinho().should('have.length.greaterThan', 0)
    })

    //Buscar produto inexistente ou indisponível
    it('Buscar produto inexistente ou indisponivel', () => {
        cy.buscaProduto(messages.PRODUTOS.BOLA_QUADRADA)
        cy.contains(messages.PRODUTOS.NENHUM_RESULTADO).should('exist');
    })
})