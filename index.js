require("dotenv").config({ path: "./.env" });
const connectToDB = require("./db/db");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//connect to database
// connectToDB();

const app = express();

app.use(express.json());
// app.use(cors({ credentials: true, origin: "http://localhost:3001" }));
app.use(cors());
app.use(cookieParser());

app.use("/post", require("./routes/posts"));

const server = app.listen(process.env.PORT || 3001, () => console.log(`Server is running on port ${process.env.PORT}`));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
