const { Stack, Duration } = require("aws-cdk-lib");
// const sqs = require('aws-cdk-lib/aws-sqs');

class PersonalServerlessApiStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
  }
}

module.exports = { PersonalServerlessApiStack };
