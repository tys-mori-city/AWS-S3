const path = require('path');
// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-northeast-1'});

// 認証情報の切り替え
//process.env.AWS_PROFILE = "$PROFILE_NAME"

// Create S3 service object
AWS.config.apiVersions = {
  s3: '2006-03-01',
  // other service API versions
};
//s3 = new AWS.S3({apiVersion: '2006-03-01'});
const s3 = new AWS.S3();

const file = process.argv[2];

// Configure the file stream and obtain the upload parameters
const fs = require('fs');
const fileStream = fs.createReadStream(file);
fileStream.on('error', function(err) {
  console.log('File Error', err);
});


const CONTENT_TYPE_LIST = {
  'png': 'image/png',
  'gif': 'image/gif',
  'jpg': 'image/jpg',
  'json': 'text/json',
  'js': 'text/javascript',
  'css': 'text/css'
}

// 複雑な対応が必要なりそう、
// aws s3 cp test.tgz s3://bucket-name --content-encoding "gzip" --content-type "application/x-gzip"
// 参照：https://dev.classmethod.jp/cloud/aws/specify-contenttype-at-s3-upload/
const ContentType = (file) => {
  if (file.split(".")==1) return false
  const type=path.extname(file).toLowerCase().slice(1)
  return CONTENT_TYPE_LIST[type]
}


// call S3 to retrieve upload file to specified bucket
const uploadParams = {
  Bucket: "tfd.web2",
  Key: path.basename(file),
  Body: fileStream,
  //ContentType: 'image/png',
  ACL: 'public-read'    // 公開指定
};
if (ContentType(file)) uploadParams.ContentType = ContentType(file)
//uploadParams.Body = fileStream;
//uploadParams.Key = path.basename(file);

// call S3 to retrieve upload file to specified bucket
s3.upload(uploadParams, (err, data) => {
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

