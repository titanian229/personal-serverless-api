const path = require("path");
const { Duration, aws_lambda } = require("aws-cdk-lib");

exports.routes = [
  {
    function: {
      description: "Weather API endpoint",
      memorySize: 256,
      timeout: Duration.seconds(15),
      runtime: aws_lambda.Runtime.NODEJS_14_X,
      entry: path.resolve(".app/routes/weather.js"),
      handler: "handler",
    },
    endpoint: "weather",
    method: "GET",
  },
];
