const express = require("express");
const app = express();
const defaultRouter = require("./Routers/default_router.js");
const cors = require("cors");
require("dot-env");

app.use("*", cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.port || 5000, () => {
  console.log(`Server started at port ${process.env.port || 5000}`);
});
