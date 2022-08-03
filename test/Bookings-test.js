import { expect } from 'chai'
import Bookings from '../src/classes/Bookings';


let bookings;
let bookingsData;


beforeEach(function() {
  bookingsData =

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

  bookings = new Bookings(bookingsData)

});


describe('Bookings', () => {
    it('should be a function', function() {
        expect(Bookings).to.be.a('function');
      })

    it('should be an instance of Room', () => {
        expect(bookings).to.be.an.instanceOf(Room);
      })

    it('should have an id of a booking', function() {
        expect(bookings.id).to.deep.equal("5fwrgu4i7k55hl6sz")
      });

    it('should have a user id of a booking', function() {
        expect(bookings.userID).to.deep.equal(42)
      });

    it('should have a date of the booking', function() {
        expect(bookings.date).to.deep.equal("2022/01/10")
      });

    it('should have a room number of the hotel', function() {
        expect(bookings.date).to.deep.equal(24)
      });

})



