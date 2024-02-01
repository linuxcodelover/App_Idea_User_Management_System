require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
require("./connection/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("uploads"));

app.use("/api", require("./routes/userRouter"));

app.listen(PORT, () =>
  console.log(`app listening on http://127.0.0.1:${PORT}/api`)
);
