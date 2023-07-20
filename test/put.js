const chai = require('chai');
const chaiHttp = require('chai-http');
const { servidor } = require('../index');

chai.use(chaiHttp);

describe("probando respuesta del servidor para metodo PUT /commcs", () => {
    it("comprueba que respuesta de metodo Post es codigo 200", function (done) {
        this.timeout(5000); // Increase the timeout to 5000ms
        chai.request(servidor)
            .put('/comics?id=d56f381d-a959-45e7-803c-ef28a1476968')
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