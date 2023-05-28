import locators from "./locators"

//Busca de produto
Cypress.Commands.add('buscaProduto', (textoBusca) => {
    cy
    .get(locators.BUSCA.XP_CAMPO_BUSCA)
    .type(textoBusca)
    .should('have.value', textoBusca)
    .type('{enter}')
})

//Selecionar item
Cypress.Commands.add('selecionarItem', () => {
    cy
    .xpath(locators.BUSCA.SELECIONAR_ITEM)
    .click()
})

//Clicar em comprar
Cypress.Commands.add('clicarComprar', () => {
    cy
    .get(locators.COMPRA.ID_BOTAO_COMPRAR)
    .click()
    cy
    .xpath(locators.COMPRA.XP_BOTAO_CONFIRMAR_PRODUTO)
    .click()
    cy
    .xpath(locators.COMPRA.XP_BOTAO_CONTINUAR)
    .click()
})

//Recuperar item carrinho
Cypress.Commands.add('itemCarrinho', () => {
    cy
    .xpath("//div[@data-testid='cart-item']")
})