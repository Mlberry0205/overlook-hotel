import chai from 'chai';
const expect = chai.expect;
import Room from '../src/classes/Room';

let room;
let room2;
let roomData;
let roomData2;


  beforeEach(function() {
    roomData = 
      {
        "number": 1,
        "roomType": "residential suite",
        "bidet": true,
        "bedSize": "queen",
        "numBeds": 1,
        "costPerNight": 358.4
      }

      roomData2 =
      {
        "number": 2,
        "roomType": "suite",
        "bidet": false,
        "bedSize": "full",
        "numBeds": 2,
        "costPerNight": 477.38
      }
      
    

      room = new Room(roomData);
      room2 = new Room(roomData2);
  });


describe('Room', () => {
    it('should be a function', function() {
        expect(Room).to.be.a('function');
      })

    it('should be an instance of Room', () => {
        expect(room).to.be.an.instanceOf(Room);
      })

    it('should be able to store the hotel room number', () => {
        expect(roomData.number).to.deep.equal(1);
        expect(roomData2.number).to.deep.equal(2);
      })

    it('should be able to store the hotel room Type', () => {
        expect(roomData.roomType).to.deep.equal("residential suite");
        expect(roomData2.roomType).to.deep.equal("suite");
      })

    it('should be able to store the hotel room bidet', () => {
        expect(roomData.bidet).to.deep.equal(true);
        expect(roomData2.bidet).to.deep.equal(false);
      })

    it('should be able to store the hotel bedsize', () => {
        expect(roomData.bedSize).to.deep.equal("queen");
        expect(roomData2.bedSize).to.deep.equal("full");
      })

    it('should be able to store the number of hotel beds', () => {
        expect(roomData.numBeds).to.deep.equal(1);
        expect(roomData2.numBeds).to.deep.equal(2);
      })

    it('should be able to store cost of the hotel for the night', () => {
        expect(roomData.costPerNight).to.deep.equal(358.4);
        expect(roomData2.costPerNight).to.deep.equal(477.38);
      })

})