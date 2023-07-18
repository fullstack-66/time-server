const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.get("/", cors(corsOptions), (req, res) => {
  const now = new Date();
  res.send({
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    date: now.getDate(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
    timestamp: now.getTime(),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
