const { Stack, Duration, CfnOutput } = require("aws-cdk-lib");
const { NodejsFunction } = require("aws-cdk-lib/aws-lambda-nodejs");
const apigateway = require("aws-cdk-lib/aws-apigateway");

class PersonalServerlessApiStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const handler = new NodejsFunction(this, "personal-serverless-lambda", {
      description: "Express Serverless API lambda",
      memorySize: 1024,
      timeout: cdk.Duration.minutes(1),
      runtime: cdk.aws_lambda.Runtime.NODEJS_14_X,
      entry: path.resolve("./app/index.js"),
      handler: "handler",
    });

    const api = new apigateway.LambdaRestApi(this, "personal-lambda-api", {
      description: "API Gateway endpoint for serverless lambda",
      handler,
    });

    this.urlOutput = new CfnOutput(this, "apiUrl", { value: api.url });
  }
}

module.exports = { PersonalServerlessApiStack };
