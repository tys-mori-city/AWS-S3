# セットアップ：
#### インストール：[参照](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/install-cliv2.html)
* ダウンロード：[URL](https://d1vvhvl2y92vvt.cloudfront.net/AWSCLIV2.msi)
* インストール：実行
* 確認：
   * aws2 --version
   * aws s3 ls --profile [default, produser]
* 削除：appwiz.cpl
* AWS CLI の設定：aws configure (or) aws2 configure
   * AWS Access Key ID []: AKIAVUYQGT563LEMBTVZ
   * AWS Secret Access Key []: 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
   * Default region name []:ap-northeast-1
   * Default output format []:json

#### サービスに関する設定：[参照](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-configure-files.html#cli-configure-files-global)


#### Ｓ３バケット作成：
* aws s3 mb s3://realtime.receive
* aws s3 mb s3://tfd.temp
* aws s3 mb s3://tfd.web --acl public-read

#### Ｓ３バケット削除：
* aws s3 rb s3://realtime.receive --force
※ 空ではない場合の削除に利用

#### Ｓ３バケット操作：[参照](https://github.com/awsdocs/aws-doc-sdk-examples/tree/master/javascript/example_code/s3)


#### Ｓ３にデータ登録：[参照](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-services-s3-commands.html)


#### Ｓ３のデータ参照：
[サービス別の AWS リージョンとエンドポイント](https://docs.aws.amazon.com/ja_jp/general/latest/gr/rande.html#endpoint-tables)

aws s3api put-object-acl --bucket tfd.web --key ciIHzAOLwiFabx18JGoqDNsTzo6kMDiDPCOgdKlz --acl public-read


apigateway.ap-northeast-1.amazonaws.com#   A W S - S 3  
 