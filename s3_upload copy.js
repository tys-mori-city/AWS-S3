var path = require('path');
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-northeast-1'});

// Create S3 service object
AWS.config.apiVersions = {
  s3: '2006-03-01',
  // other service API versions
};

//s3 = new AWS.S3({apiVersion: '2006-03-01'});
s3 = new AWS.S3();
var credentials = new AWS.SharedIniFileCredentials({profile: 'work-account'});
console.log(AWS.config.credentials)
return;


// call S3 to retrieve upload file to specified bucket
var uploadParams = {
  Bucket: "tfd.web2",
  Key: '',
  Body: '',
  ContentType: 'image/png',
  ACL: 'public-read'
};
var file = process.argv[2];

// Configure the file stream and obtain the upload parameters
var fs = require('fs');
var fileStream = fs.createReadStream(file);
fileStream.on('error', function(err) {
  console.log('File Error', err);
});

uploadParams.Body = fileStream;
uploadParams.Key = path.basename(file);

// call S3 to retrieve upload file to specified bucket
s3.upload (uploadParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } if (data) {
    console.log("Upload Success", data.Location);
  }
})

// 登録結果確認：
// aws s3api list-objects-v2 --bucket tfd.web2 

// 公開設定：
// https://aws.amazon.com/jp/premiumsupport/knowledge-center/read-access-objects-s3-bucket/

