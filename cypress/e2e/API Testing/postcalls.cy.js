describe('api testing', ()=>{
    it('Apporach 1- hard coded json object',()=>{
        const req= {
                tourist_name: "Lindsay",
                tourist_email: "cole.dbrd8dke@gmail.com",
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
    it('Apporach 2- dynamically generating json object',()=>{
        const req= {
                tourist_name: Math.random().toString(5).substring(2),
                tourist_email: Math.random().toString(5).substring(2)+"@gmail.com",
                tourist_location: "Priscillaton"
        }
        cy.request({
            method:'POST',
            url:'http://restapi.adequateshop.com/api/Tourist',
            body: req}).then((res) =>{
                expect(res.status).to.eq(201)
                expect(res.body.tourist_name).to.eq(req.tourist_name)
            })
    })
    it('Apporach 3- using fixture',()=>{
    
        cy.fixture('tourist').then((myfixture)=>{
         const req= myfixture
        cy.request({
            method:'POST',
            url:'http://restapi.adequateshop.com/api/Tourist',
            body: req}).then((res) =>{
                expect(res.status).to.eq(201)
                expect(res.body.tourist_name).to.eq(req.tourist_name)
            })
        })
        
    })
})