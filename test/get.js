const chai = require('chai');
const chaiHttp = require('chai-http');
const {servidor} = require('../index');

chai.use(chaiHttp);

describe("Probando respuesta del servidor para medoto Delete /comics", () =>{
    it("comprueba que respuesta de metodo PUT es codigo 200", (done) =>{

        chai.request(servidor).get('/comics').end((errer,respuesta) =>{
            chai.expect(respuesta).to.have.status(200);
            done();

        })
    })

})