
describe('api testing', ()=>{
    const qparam={
        page:2
    }
    it('Apporach 1- query param',()=>{
        cy.request({
            method:'GET',
            url:'http://reqres.in/api/users',
            qs:qparam
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body.page).to.be.equal(2)
            expect(res.body.data).to.have.length(6)
            expect(res.body.data[0]).have.property('id',7)
        })
    })
})