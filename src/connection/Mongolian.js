import React from 'react';
import express from 'express';
import mongojs from 'mongojs';


const app = express();

app.use(express.static("public"));

const databaseUrl = "igo2college";
const collections = ["college", "fafsa"];


const db = mongojs(databaseUrl, collections);

db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/all", function(req, res) {
  db.fafsa.find({}, function(error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});

app.get("/state", function (req,res) {
  db.fafsa.find().sort({ state: 1 }, function(error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});
console.log("hi");



export default Mongolian;
