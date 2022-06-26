const path = require("path");
const { Stack, Duration, CfnOutput, aws_lambda } = require("aws-cdk-lib");
const { NodejsFunction } = require("aws-cdk-lib/aws-lambda-nodejs");
const apigateway = require("aws-cdk-lib/aws-apigateway");

const { routes } = require("../app/routes");

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
      timeout: Duration.minutes(1),
      runtime: aws_lambda.Runtime.NODEJS_14_X,
      entry: path.resolve("./app/index.js"),
      handler: "handler",
    });

    const api = new apigateway.LambdaRestApi(this, "personal-lambda-api", {
      description: "API Gateway endpoint for serverless lambda",
      handler,
    });

    for (let index = 0; index < routes.length; index++) {
      const route = routes[index];
      api.root.addResource(route.endpoint);
      api.root.addMethod(
        route.method,
        new NodejsFunction(this, `personal-serverless-lambda-${route.endpoint}`, route.function)
      );
    }

    this.urlOutput = new CfnOutput(this, "apiUrl", { value: api.url });
  }
}

module.exports = { PersonalServerlessApiStack };
