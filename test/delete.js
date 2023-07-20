const chai = require('chai');
const chaiHttp = require('chai-http');
const { servidor } = require('../index');

chai.use(chaiHttp);

describe("probando respuesta del servidor para metodo DELETE /commcs", () => {
    it("comprueba que respuesta de metodo Post es codigo 200", function (done) {
        this.timeout(5000); // Increase the timeout to 5000ms
        chai.request(servidor)
            .delete('/comics?id=d56f381d-a959-45e7-803c-ef28a1476968')
            .end((error, respuesta) => {
                chai.expect(respuesta).to.have.status(200);
                done();
            });
            
    });
});