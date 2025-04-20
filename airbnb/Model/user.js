//Core module
const path = require("path");
const rootDir = require("../utils/rootDir");
const fs = require("fs");
const { runInThisContext } = require("vm");
const { json } = require("stream/consumers");
//external module
const filePath = path.join(rootDir, "Data", "filedata.json");


module.exports = class User {
  constructor(hname, pnight, location, rating, photoURL) {
    this.hname = hname;
    this.pnight = pnight;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
  }
  save() {
    User.fetchAll((registeredHome) => {
      registeredHome.push(this);
      fs.writeFile(filePath, JSON.stringify(registeredHome), (err) => {
        console.log("Error Writting data in the file", err);
      });
    });
  }
  static fetchAll(callback) {
    fs.readFile(filePath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
