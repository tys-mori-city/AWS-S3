// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-northeast-1'});

// Create S3 service object
var s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Set the parameters for S3.getBucketCors
var bucketParams = {Bucket: 'tfd.web'};

// call S3 to retrieve CORS configuration for selected bucket
s3.getBucketCors(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else if (data) {
    console.log("Success", JSON.stringify(data.CORSRules));
  }
});