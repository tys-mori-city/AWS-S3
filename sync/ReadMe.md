# localとS3同期：
#### [参照](https://docs.aws.amazon.com/cli/latest/reference/s3/sync.html)
* [ＣＬＩコマンド一覧](https://qiita.com/uhooi/items/48ef6ef2b34162988295)
* sync Option --acl <value> 調査
  * 概要：
```
 <LocalPath> <S3Uri> or <S3Uri> <LocalPath> or <S3Uri> <S3Uri>
  [--dryrun]
  [--quiet]
  [--include <value>]
  [--exclude <value>]
  [--acl <value>]
  [--follow-symlinks | --no-follow-symlinks]
  [--no-guess-mime-type]
  [--sse <value>]
  [--sse-c <value>]
  [--sse-c-key <value>]
  [--sse-kms-key-id <value>]
  [--sse-c-copy-source <value>]
  [--sse-c-copy-source-key <value>]
  [--storage-class <value>]
  [--grants <value> [<value>...]]
  [--website-redirect　<value>]
  [--content-type <value>]
  [--cache-control <value>]
  [--content-disposition <value>]
  [--content-encoding <value>]
  [--content-language <value>]
  [--expires <value>]
  [--source-region <value>]
  [--only-show-errors]
  [--no-progress]
  [--page-size <value>]
  [--ignore-glacier-warnings]
  [--force-glacier-transfer]
  [--request-payer <value>]
  [--metadata <value>]
  [--metadata-directive <value>]
  [--size-only]
  [--exact-timestamps]
  [--delete]
```


#### 想定利用シーン：
* 外部サービスにより配信されてたでたを対処に
* 練馬のデータセンターWindowsサーバより実施
* 各種受信データの格納されるフォルダ
* ファイルが新規追加された後すぐS3のrealtime.receive中の該当フォルダに転送

#### 実行文：
```
aws s3 sync --exact-timestamps s3://ctie.realtime.receive ./realtime
```

#### 登録された内容確認：
```
 aws s3api list-objects-v2 --bucket ctie.realtime.receive
```

#### TODO：
下記の確認が必要になる！
* Local側の上位ルート監視でいいのか？
* 実行結果記録できるのか？
* ２代より同時監視した場合はどうなるのか？
* プロセスの死活監視はどうなるのか？
* 転送されたファイルは正常に利用できるのか？


