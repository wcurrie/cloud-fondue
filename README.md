## What?

Expand acronyms like ECS, ECR, EC2 using an AWS lambda fronted by api gateway?

Why? Learn. Play.

### Deployment

    aws s3 mb s3://cloud-service-namer --region ap-southeast-2
    
    aws cloudformation package \
       --template-file cfn.yaml \
       --output-template-file serverless-output.yaml \
       --s3-bucket cloud-service-namer
       
    aws cloudformation deploy --template-file $PWD/serverless-output.yaml --stack-name CloudNamer

### Resources

http://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started.html#getting-started-new-lambda
https://aws.amazon.com/blogs/compute/introducing-simplified-serverless-application-deplyoment-and-management/

Testing locally: https://github.com/lambci/docker-lambda

### Lessons

Seems `aws cloudformation package` doesn't like contents of node_modules/.bin directory. Just delete it.

    Unable to upload artifact None referenced by CodeUri parameter of TestFunction resource.
    [Errno 2] No such file or directory: '/Users/wcurrie/play/cloud-service-namer/node_modules/.bin/acorn'
    
Just invoking callback(null, {}) is not enough: https://forums.aws.amazon.com/thread.jspa?threadID=239688

    Execution failed due to configuration error: Malformed Lambda proxy response
    
Understand how api gateway forwards through query string parameters: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-set-up-simple-proxy.html#api-gateway-simple-proxy-for-lambda-input-format
    
Web text to speech

    window.speechSynthesis.speak(new SpeechSynthesisUtterance("Cantabile Fossicker Noumenality"))