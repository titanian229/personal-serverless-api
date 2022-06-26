const { Stage } = require("aws-cdk-lib");
const { PersonalServerlessApiStack } = require("./personal-serverless-api-stack");

class PersonalServerlessStage extends Stage {
  constructor(scope, id, props) {
    super(scope, id, props);

    const service = new PersonalServerlessApiStack(this, "WebService");

    // Expose PersonalServerlessApiStack's output one level higher
    this.urlOutput = service.urlOutput;
  }
}

module.exports = { PersonalServerlessStage };
