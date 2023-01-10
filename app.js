const express = require("express");
const app = express();
const port = 3002;
const path = require("path");
const cors = require("cors");

app.use(cors());
var penDrive = "";

// const fs = require("fs");
// let textFilePath = path.join(__dirname, "..", "test.txt");
// fs.readFile(textFilePath, (err, textFile) => {
//   console.log(__dirname);
//   if (err) throw err;
//   console.log(textFile.toString());
//   if (textFile.includes("media/aaron25")) console.log("pen drive is there");
//   else console.log("pen drive is no there");
//   penDrive = textFile.toString().split("/media/aaron25/")[1];
//   penDrive = penDrive.split(`\n`)[0];
//   console.log(penDrive);
// });
// console.log(penDrive);

app.get("/", (req, res, next) => {
  console.log(__dirname);
  // console.log(penDrive == "MALL", penDrive, typeof penDrive);
  let filePath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "media",
    "pingala",
    "SKM3"
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
    "pingala",
    "SKM3"
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

var detected = false;
console.log(detected);

app.post("/detected", (req, res, next) => {
  detected = true;
  console.log(detected);
  res.send("done");
});
app.post("/notdetected", (req, res, next) => {
  detected = false;
  console.log(detected);
  res.send("done");
});

app.post("/blackoutscrenn", (req, res, next) => {
  console.log(detected);
  res.send(detected);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// const axios = require('axios')
// async function tenthque() {
//   try {
//     let response = await axios.get(
//       `https://ap1-infinity-user-data.s3.amazonaws.com/13416/teams/5111_Data.json`
//     )
//     console.log(response.data['First Array'][0].rdata)
//   } catch (error) {
//     console.log(error)
//   }
// }
// tenthque()
