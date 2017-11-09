var hotel = { name: 'Biltmore',
  rooms: 500,
  roomsBooked: 150,
  roomservice: 'Yes',
  pool: 'Yes',
  gym: 'Yes',
  businessOffice: 'Yes' 
  roomsAvail: function() {
    return this.rooms - this.roomsBooked;
  }
}
  