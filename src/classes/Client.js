// import Booking from '../classes/Booking';

class Client {
    constructor(clientData) {
        this.id = clientData.id;
        this.name = clientData.name;
        this.spent = 0;
        this.bookingHistory = [];
        }
    


  clientBookingHistory(bookingData) {
       bookingData.filter(booking => {
        if (booking.userID === this.id) {
            this.bookingHistory.push(booking);
         }
       });
        return this.bookingHistory
    }
}
        

    // clientBookingTotal() {

    // }






export default Client;