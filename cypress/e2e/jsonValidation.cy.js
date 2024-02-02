import ajv from 'ajv'


const avj= new ajv()

describe('test via json schema',()=>{
it("schema validation against response",()=>{
    cy.request({
        method:'GET',
        url:"https://fakestoreapi.com/products"
    }).then((res)=>{
        const  schema= {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "title": "Generated schema for Root",
            "type": "object",
            "properties": {
              "id": {
                "type": "number"
              },
              "title": {
                "type": "string"
              },
              "price": {
                "type": "number"
              },
              "description": {
                "type": "string"
              },
              "category": {
                "type": "string"
              },
              "image": {
                "type": "string"
              },
              "rating": {
                "type": "object",
                "properties": {
                  "rate": {
                    "type": "number"
                  },
                  "count": {
                    "type": "number"
                  }
                },
                "required": [
                  "rate",
                  "count"
                ]
              }
            },
            "required": [
              "id",
              "title",
              "price",
              "description",
              "category",
              "image",
              "rating"
            ]
          }
   // schema end
  const validate= avj.compile(schema)
  const isvalid=validate(res.body)
  expect(isvalid).to.be.true()
        })
})
it('test with xml',()=>{
    
})
})