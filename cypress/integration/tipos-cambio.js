/// <reference types="Cypress"/>

const pagina = "http://192.168.0.111:8080";

describe("Test de Tipos de cambios", () =>{
    before(() =>{
        cy.visit(pagina);
    });

    it("tests", ()=>{
        cy.get(".base").type("USD");
        cy.get(".boton-base").click();
        cy.get(".fecha").type("2020-03-11");
        cy.get("boton-fecha").click();

        cy.get(".resultado").should("have.text", `https://api.exchangeratesapi.io/${$($fecha).val()}?base=${$($base).val()}`)
    })
})