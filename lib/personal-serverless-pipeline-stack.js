const { Stack } = require("aws-cdk-lib");
const { CodePipeline, CodePipelineSource, ShellStep } = require("aws-cdk-lib/pipelines");

/**
 * The stack that defines the application pipeline
 */
export class PersonalServerlessPipelineStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, "Pipeline", {
      // The pipeline name
      pipelineName: "PersonalServerlessPipeline",

      // How it will be built and synthesized
      synth: new ShellStep("Synth", {
        // Where the source can be found
        input: CodePipelineSource.gitHub("titanian229/personal-serverless-api", "main"),

        // Install dependencies, build and run cdk synth
        commands: ["npm ci", "npm run build", "npx cdk synth"],
      }),
    });

    // This is where we add the application stages
    // ...
  }
}
