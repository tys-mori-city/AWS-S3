# セットアップ：
#### インストール：
###### [参照１](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-chap-welcome.html)

###### [参照２](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/install-cliv2.html)


* ダウンロード：[URL](https://d1vvhvl2y92vvt.cloudfront.net/AWSCLIV2.msi)
* インストール：実行
* 確認：
   * aws2 --version
   * aws configure ls --profile [default, produser]
* 削除：appwiz.cpl
* AWS CLI の設定：aws configure (or) aws2 configure
   * AWS Access Key ID []: AKIAVUYQGT563LEMBTVZ
   * AWS Secret Access Key []: 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
   * Default region name []:ap-northeast-1
   * Default output format []:json

#### サービスに関する設定：[参照](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-configure-files.html#cli-configure-files-global)

# 【AWS SDK CLI】環境変数利用

* https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-configure-files.html#cli-configure-files-settings


#### Ｓ３バケット作成：
* aws s3 mb s3://ctie.realtime.receive
* aws s3 mb s3://ctie.tfd.temp
* aws s3 mb s3://ctie.tfd.web
* aws s3 mb s3://ctie.tfd.system


#### Ｓ３バケット一覧：
* aws s3 ls [ctie.realtime.receive/]

#### Ｓ３バケット削除：
* aws s3 rb s3://ctie.realtime.receive --force
※ 空ではない場合の削除に利用

#### Ｓ３バケット操作：[参照](https://github.com/awsdocs/aws-doc-sdk-examples/tree/master/javascript/example_code/s3)


#### Ｓ３にデータ登録：[参照](https://docs.aws.amazon.com/cli/latest/reference/s3/cp.html)

```
aws s3api put-bucket-acl --bucket ctie.tfd.web --grant-full-control 'emailaddress="user1@example.com",emailaddress="user2@example.com"' --grant-read 'uri="http://acs.amazonaws.com/groups/global/AllUsers"'
```



#### Ｓ３のリソース公開：[参照](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-services-s3-commands.html)

```
aws s3api put-object-acl --bucket ctie.tfd.web --key ciIHzAOLwiFabx18JGoqDNsTzo6kMDiDPCOgdKlz --acl public-read
```

#### Ｓ３のデータ参照：
[サービス別の AWS リージョンとエンドポイント](https://docs.aws.amazon.com/ja_jp/general/latest/gr/rande.html#endpoint-tables)


#### ブラウザ上確認：
https://apigateway.ap-northeast-1.amazonaws.com#$esourceName