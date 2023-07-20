const chai = require('chai');
const chaiHttp = require('chai-http');
const { servidor } = require('../index');

chai.use(chaiHttp);

describe("probando respuesta del servidor para metodo POST /commcs", () => {
    it("comprueba que respuesta de metodo Post es codigo 200", (done) => {
        chai.request(servidor)
            .post('/comics')
            .send({
                "titulo": "El intrepido hombre araña",
                "autor": "Stan Lee",
                "issn": "212124124124",
                "cantidad": 340
            })
            .end((error, respuesta) => {
                chai.expect(respuesta).to.have.status(200);
                done();
            });
    });
});