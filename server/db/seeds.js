use hotel;
db.dropDatabase();

db.createCollection("bookings", {
  validator:{
    $jsonSchema: {
      bsonType: "object",
      required: ['name', 'email', 'checkInStatus'],
      properties: {
        name: {
          bsonType: "string",
          description: "needs to be a string"
        },
        email:{
          bsonType: "string",
          description: "needs to be a string"
        },
        checkInStatus:{
          bsonType: "bool",
          description: "needs to be a string"
        }
      }
    }
  }
})

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
