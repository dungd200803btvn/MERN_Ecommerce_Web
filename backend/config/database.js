const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose
      .connect("mongodb+srv://admin:admin123@cluster0.aq21kv9.mongodb.net/MERNWEBDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
      })
      .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
      });
  };
  
  module.exports = connectDatabase;