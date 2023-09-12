const express = require("express");
const app = express();
const errorMiddleWare = require("./middleware/error");
const product = require("./routes/productRoute");
app.use(express.json());
app.use("/api/v1",product);
app.use(errorMiddleWare);



module.exports = app;