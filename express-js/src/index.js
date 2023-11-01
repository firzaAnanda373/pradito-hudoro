require("dotenv").config(); //should be on the top
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const userRouters = require("./routes/users");

const middlewareLog = require("./middlewares/logs");

app.use(express.json());

app.use(middlewareLog);

app.use("/users", userRouters);

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
