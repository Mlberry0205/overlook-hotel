import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/classes/Booking';



let booking;
let bookingData;


beforeEach(function() {
  bookingData = [

  {
    "id": "5fwrgu4i7k55hl6sz",
    "userID": 9,
    "date": "2022/04/22",
    "roomNumber": 15,

  },
  {
    "id": "5fwrgu4i7k55hl6t5",
    "userID": 43,
    "date": "2022/01/24",
    "roomNumber": 24,

  },
  {
    "id": "5fwrgu4i7k55hl6t6",
    "userID": 13,
    "date": "2022/01/10",
    "roomNumber": 12,

  }
]

  booking = new Booking(bookingData);

});


describe('Booking', () => {
    it('should be a function', function() {
        expect(Booking).to.be.a('function');
      })

    it('should be an instance of Room', () => {
        expect(booking).to.be.an.instanceOf(Booking);
      })

    it('should have an id of a booking', function() {
        expect(booking.id).to.deep.equal("5fwrgu4i7k55hl6sz")
      });

    it('should have a user id of a booking', function() {
        expect(booking.userID).to.deep.equal(9)
      });

    it('should have a booking date', function() {
        expect(booking.date).to.deep.equal("2022/04/22")
      });

    it('should have a hotel room number', function() {
        expect(booking.roomNumber).to.deep.equal(15)
      });

})



