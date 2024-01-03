/// <reference types="cypress" />

describe("HTTP Request", () => {

    it("Delete request", () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2'
        })
            .then((response) => {
                expect(response.status).to.eq(204)
                expect(response.duration).lessThan(230)

            })
    })

})