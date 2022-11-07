const express = require("express");
const app = express();
const port = 3001;
const path = require("path");
const cors = require("cors");

app.use(cors());
var fs = require("fs");

app.get("/", (req, res, next) => {
  console.log(__dirname);
  let filePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "media",
    "aaron25",
    "MALL"
  );
  // res.send(filePath);

  res.sendFile("config.txt", { root: filePath }, function (err) {
    if (err) {
      next({ error: true });
    } else {
      next();
    }
  });

  // fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
  //   if (!err) {
  //     console.log("received data: " + data);
  //     res.end();
  //   } else {
  //     console.log(err);
  //   }
  // });
});
app.get("/:filename", (req, res, next) => {
  console.log(__dirname);
  let filePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "media",
    "aaron25",
    "MALL"
  );
  // res.send(filePath);

  res.sendFile(req.params.filename, { root: filePath }, function (err) {
    if (err) {
      next({ error: true });
    } else {
      next();
    }
  });

  // fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
  //   if (!err) {
  //     console.log("received data: " + data);
  //     res.end();
  //   } else {
  //     console.log(err);
  //   }
  // });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
