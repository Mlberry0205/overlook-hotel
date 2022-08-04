import Booking from '../classes/Booking-test';

class Client {
    constructor(clientData) {
        this.id = clientData.id;
        this.name = clientData.name;
        this.spent = 0;
        this.bookingHistory = [];
    }


    clientBookingHistory() {
       const clientHistory = filter((booking) => {
        if (booking.userID === this.id) {
            console.log("ello", booking)
            this.bookingHistory.push(booking)
         }
       });
       console.log("HIIII", clientHistory)
       return clientHistory 
    }

        clientBookingHistory()

    clientBookingTotal() {

    }
}





export default Client;