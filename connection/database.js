const mongoose = require("mongoose");
// var DB_URI =
//   "mongodb+srv://nikulthakor6458:KhwbIn3SWOkJmERN@cluster0.otniabz.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(process.env.DB_URI)
  .then((connection) => {
    console.log("Connection Successful....");
  })
  .catch((error) => {
    console.log("No Connection " + error.message);
  });
