class Booking {
    constructor(bookingData) {
        this.id = bookingData.id;
        this.userID = bookingData.userID;
        this.date = bookingData.date;
        this.roomNumber = bookingData.roomNumber;
    }
}
//Booking:
//should add bookings
//should remove bookings when canceled
//should remove booking when date passes

//Client: 
//should make bookings for rooms
//should keep track of total spent on rooms
//should move bookings to past bookings
//should find all future bookings

//Manager:
//Should return array of available rooms
//return array of booked rooms
//return number of available rooms
//return percent of available rooms

export default Booking;