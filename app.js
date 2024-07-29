const express = require("express");
const app = express();
const routes = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${process.env.PORT}`);
});

module.exports = app;
