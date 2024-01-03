/// <reference types="cypress" />

describe("HTTP Request", () => {

    it("Get request", () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2'

        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data.id).to.eq(2)
                expect(response.body.data.email).to.eq('janet.weaver@reqres.in')
                expect(response.body.data.first_name).to.eq("Janet")
                expect(response.body.data.last_name).to.eq("Weaver")
                expect(response.body.data.avatar).to.eq("https://reqres.in/img/faces/2-image.jpg")
                expect(response.body.support.url).to.eq("https://reqres.in/#support-heading")
                expect(response.body.support.text).to.eq("To keep ReqRes free, contributions towards server costs are appreciated!")
                expect(response.duration).lessThan(60)

            })
    })

})