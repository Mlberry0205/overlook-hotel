import chai from 'chai';
const expect = chai.expect;
import Client from '../src/classes/Client';
// import Booking from '../src/classes/Booking';

let client;
let client2;
let clientData;
let clientData2;
let bookingData;
let bookingData2;
// let booking;


beforeEach(function() {
  clientData = 
  {
    "id": 1,
    "name": "Leatha Ullrich"
  }

  clientData2 =
  {
    "id": 2,
    "name": "Rocio Schuster"
  }

  bookingData = [

  {
    "id": "5fwrgu4i7k55hl6sz",
    "userID": 1,
    "date": "2022/04/22",
    "roomNumber": 15,
  },
  {
    "id": "5fwrgu4i7k55hl6t5",
    "userID": 3,
    "date": "2022/01/24",
    "roomNumber": 24,
  }
]
 
  client = new Client(clientData);
  client2 = new Client(clientData2);

});


describe('Client', () => {
    it('should be a function', function() {
        expect(Client).to.be.a('function');
      })

    it('should be an instance of client', () => {
        expect(client).to.be.an.instanceOf(Client);
      })

    it('should have an id of a client', function() {
        expect(client.id).to.deep.equal(1);
        expect(client2.id).to.deep.equal(2);
      });

    it('should have a name for each client', function() {
        expect(client.name).to.deep.equal("Leatha Ullrich")
        expect(client2.name).to.deep.equal("Rocio Schuster")
      });

      // it('should have an array of the booking history', function() {
      //   expect(booking.bookingHistory).to.deep.equal(0);
      //   expect(booking2.bookingHistory).to.deep.equal(0);
      // });

    it.only('should have a client booking History', function() {
        client.clientBookingHistory(bookingData)
        expect(client.bookingHistory).to.deep.equal([{
          "id": "5fwrgu4i7k55hl6sz",
          "userID": 1,
          "date": "2022/04/22",
          "roomNumber": 15
        }]);
       
      });

      it('should have a total of the clients booking history', function() {
        expect(booking.bookingHistory).to.deep.equal();
        expect(booking2.bookingHistory).to.deep.equal();
      });

    

})