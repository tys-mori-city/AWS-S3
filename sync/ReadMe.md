# localとS3同期：
#### [参照](https://docs.aws.amazon.com/cli/latest/reference/s3/sync.html)

#### 想定利用シーン：
* 外部サービスにより配信されてたでたを対処に
* 練馬のデータセンターWindowsサーバより実施
* 各種受信データの格納されるフォルダ
* ファイルが新規追加された後すぐS3のrealtime.receive中の該当フォルダに転送

#### 実行文：
```
aws s3 sync --exact-timestamps s3://ctie.realtime.receive ./realtime
```

#### TODO：
下記の確認が必要になる！
* Local側の上位ルート監視でいいのか？
* 実行結果記録できるのか？
* ２代より同時監視した場合はどうなるのか？
* プロセスの死活監視はどうなるのか？
* 転送されたファイルは正常に利用できるのか？


