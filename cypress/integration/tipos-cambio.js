/// <reference types="Cypress"/>
/// <reference types="jquery" />

const pagina = "http://localhost:8080";

describe("Test de Tipos de cambios", () =>{
    before(() =>{
        cy.visit(pagina);
    });

    it("tests", ()=>{
        cy.get(".base").type("USD");
        cy.get(".boton-base").click();
        cy.get(".fecha").type("2020-03-11");
        cy.get(".boton-fecha").click();

        cy.get("h1").should("have.text", "Cambios del día 2020-03-11 en base USD");

        cy.get(".base").type("asfsaf");
        cy.get(".boton-base").click();

        cy.get("h1").should("have.text", "Error!");
        cy.get(".error").should("have.text","Error! ingresar solo 3 letras en mayusculas o no ingresar ninguna letra");

        cy.get(".fecha").type("asfsaf");
        cy.get(".boton-fecha").click();

        cy.get("h1").should("have.text", "Error!");
        cy.get(".error").should("have.text","Error! ingresar una fecha desde 1999 en adelante");
    })
})