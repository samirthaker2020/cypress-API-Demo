describe("HTTP Request", ()=>{
it('Basic Authentication',()=>{
cy.request({
    method:'GET',
    url:'https://postman-echo.com/basic-auth',
    auth:{
        user:'postman',
        pass:'password',
        method:'degest'
    }
}).then((response)=>{
    expect(response.status).to.eq(200)
})
})

it('Bearer Authentication',()=>{
    cy.request({
        method:'GET',
        url:'https://api.github.com/user/repos',
        auth:{
            user:'postman',
            pass:'password',
            method:'degest'
        }
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })
    })
})