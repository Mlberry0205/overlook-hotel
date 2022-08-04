import chai from 'chai';
const expect = chai.expect;
import Client from '../src/classes/Client';

let client;
let clientData;


beforeEach(function() {
  clientData = [
  {
    "id": 1,
    "name": "Leatha Ullrich"
  },
  {
    "id": 2,
    "name": "Rocio Schuster"
  },
  {
    "id": 3,
    "name": "Kelvin Schiller"
  }
]

  client = new Client(clientData);

});


describe('Client', () => {
    it('should be a function', function() {
        expect(Client).to.be.a('function');
      })

    it('should be an instance of client', () => {
        expect(client).to.be.an.instanceOf(Client);
      })

})