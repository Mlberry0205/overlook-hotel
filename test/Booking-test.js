import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/classes/Booking';
import Client from '../src/classes/Client';



let booking;
let bookingData;
let booking2;
let bookingData2


beforeEach(function() {
  bookingData = 

  {
    "id": "5fwrgu4i7k55hl6sz",
    "userID": 9,
    "date": "2022/04/22",
    "roomNumber": 15,
  }

  bookingData2 =
  {
    "id": "5fwrgu4i7k55hl6t5",
    "userID": 43,
    "date": "2022/01/24",
    "roomNumber": 24,
  }
  

  booking = new Booking(bookingData);
  booking2 = new Booking(bookingData2);

});


describe('Booking', () => {
    it('should be a function', function() {
        expect(Booking).to.be.a('function');
      })

    it('should be an instance of Room', () => {
        expect(booking).to.be.an.instanceOf(Booking);
      })

    it('should have an id of a booking', function() {
        expect(booking.id).to.deep.equal("5fwrgu4i7k55hl6sz");
        expect(booking2.id).to.deep.equal("5fwrgu4i7k55hl6t5");
      });

    it('should have a user id of a booking', function() {
        expect(booking.userID).to.deep.equal(9)
        expect(booking2.userID).to.deep.equal(43)
      });

    it('should have a booking date', function() {
        expect(booking.date).to.deep.equal("2022/04/22");
        expect(booking2.date).to.deep.equal("2022/01/24");
      });

    it('should have a hotel room number', function() {
        expect(booking.roomNumber).to.deep.equal(15);
        expect(booking2.roomNumber).to.deep.equal(24);
      });

})



