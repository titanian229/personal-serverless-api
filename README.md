# Personal Serverless API

This project creates a serverless Express API within AWS, using infrastructure as code with AWS CDK.

The initial pipeline created deploys the Lambda and provisions the API Gateway endpoint to trigger the lambda.  On pushes to this repo's main branch the pipeline runs to push both infrastructure and code changes, including to the pipeline itself.

## Technologies

* NodeJS
* ExpressJS
* Infrastructure as code
* AWS Lambda, AWS CodePipeline, AWS API Gateway, AWS Cloud Development Kit
