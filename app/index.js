const AWS = require("aws-sdk");

exports.handler = async (/** @type {any} */ event) => {
  console.log("It worked!");
  // console.log("Event: ", JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    body: "It worked!",
  };
};
