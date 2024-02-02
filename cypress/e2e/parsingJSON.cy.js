
describe("Parsing JSON Response", ()=>{
    it("Parsing simple JSON response", ()=>{
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',

        }).then((res)=>{
            expect(res.status).to.equal(200)
            expect(res.body[0].rating.rate).to.equal(3.9)
        })
    })
    it("Parsing complex JSON response", ()=>{
        let totalprice=0;
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs:{
                limit:5
            }

        }).then((res)=>{
            expect(res.status).to.equal(200)
            expect(res.body[0].rating.rate).to.equal(3.9)
            res.body.forEach(element => {
                totalprice=totalprice+element.price
            });
            expect(totalprice).to.equal(899.23)
        })
    })
})