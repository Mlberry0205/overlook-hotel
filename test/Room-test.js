import { expect } from 'chai';
import Room from '../src/classes/Room';

let room;
let roomData;


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

      room = new Room(roomData);
  });

describe('Room', () => {
    it('should be a function', function() {
        expect(Room).to.be.a('function');
      })

    it('should be an instance of Room', () => {
        expect(room).to.be.an.instanceOf(Room);
      })

    it('should be able to store the hotel room number', () => {
        expect(roomData.number).to.deep.equal(1)
      })

    it('should be able to store the hotel room Type', () => {
        expect(roomData.roomType).to.deep.equal("residential suite")
      })

    it('should be able to store the hotel room bidet', () => {
        expect().to.deep.equal(true)
      })

    it('should be able to store the hotel bedsize', () => {
        expect(roomData.bedSize).to.deep.equal("queen")
      })

    it('should be able to store the number of hotel beds', () => {
        expect(roomData.numBeds).to.deep.equal(1)
      })

    it('should be able to store cost of the hotel for the night', () => {
        expect(roomData.costPerNight).to.deep.equal(358.4)
      })

})