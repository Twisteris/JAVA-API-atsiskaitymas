const mongoose = require("mongoose");

const connectToDB = async () => {
  await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Connected to database");
};

module.exports = connectToDB;
