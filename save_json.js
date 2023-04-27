const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const save = async (favNumber) => {
  console.log("saving");
  await s3
    .putObject({
      Body: JSON.stringify({ favoriteNumber: favNumber }),
      Bucket: "cyclic-shiny-plum-cow-us-east-2",
      Key: "favoriteNumber",
    })
    .promise();
};

module.exports = { save };
