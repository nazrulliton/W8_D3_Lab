use hotel;
db.dropDatabase();


db.bookings.insertMany([
  {
    name: "Samuel Jackson",
    email: "Samjackson@gmail.com",
    checkInStatus: true,
  },
  {
    name: "Marc Davidson",
    email: "mdavidson@gmail.com",
    checkInStatus: false,
  },
  {
    name: "Leo Messi",
    email: "Lmessi@gmail.com",
    checkInStatus: true,
  }
]);
