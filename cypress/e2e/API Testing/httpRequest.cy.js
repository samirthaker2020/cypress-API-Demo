/// <reference types="cypress"/>
describe("HTTP Request", ()=>{
    it("GET Call",()=>{
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').its('status').should('equal',200)
    })
})