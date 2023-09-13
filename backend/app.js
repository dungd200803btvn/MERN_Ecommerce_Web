const express = require("express");

const errorMiddleWare = require("./middleware/error");
const cookieParser = require("cookie-parser");
const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1",product);
app.use("/api/v1",user);
app.use(errorMiddleWare);



module.exports = app;