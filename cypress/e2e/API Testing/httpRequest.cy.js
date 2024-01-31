/// <reference types="cypress"/>
describe("HTTP Request", ()=>{
    it("GET Call",()=>{
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').its('status').should('equal',200)
    })
    it('POST request', ()=>{
        cy.request({
            method:'post',
            url:'https://jsonplaceholder.typicode.com/posts/',
            body:{
                title:'test',
                body:'this is a test'
            }
        }).its('status').should('equal',201)
    })
    it('PUT request', ()=>{
        cy.request({
            method:'put',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                title:'test',
                body:'this is update a test'
            }
        }).its('status').should('equal',200)
    })
    it('DELETE request', ()=>{
        cy.request({
            method:'delete',
            url:'https://jsonplaceholder.typicode.com/posts/1'
        }).its('status').should('equal',200)
    })
})