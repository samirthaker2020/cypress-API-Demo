
describe('api testing', ()=>{
   let authToken;
    before('Apporach 1- token test',()=>{
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            headers:{
                'Content-Type':'application/json'
            },
            body:{
                clientName:"abc",
                clientEmail:Math.random().toString(5).substring(2)+"@gmail.com"
            }
        }).then((res)=>{
            expect(res.status).to.be.equal(201)
            authToken=res.body.accessToken;
        })
    })

    it('Create an order',()=>{
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type':'application/json',
                'Authorization':authToken
            },
            body:{
                    "bookId":"1",
                    "customerName":"tests@gmail.com"
                }
            
        }).then((res)=>{
            expect(res.status).to.be.equal(201)
           
        })
    })

    it('Get all orders',()=>{
        cy.request({
            method:'GET',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type':'application/json',
                'Authorization':authToken
            },
            cookies:{
                'cookieName':'mycookie'
            }
            
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
           
        })
    })
})