describe('api testing', ()=>{
    it('Apporach 1- hard coded json object',()=>{
        const req= {
                tourist_name: "Lindsay",
                tourist_email: "cole.dbrddke@gmail.com",
                tourist_location: "Priscillaton"
        }
        cy.request({
            method:'POST',
            url:'http://restapi.adequateshop.com/api/Tourist',
            body: req}).then((res) =>{
                expect(res.status).to.eq(201)
                expect(res.body.tourist_name).to.eq('Lindsay')
            })
    })
})