# README (to 候補者様)

この度は、ITANDIに対してご興味をお持ち頂き、
またお時間頂きましてありがとうございます。

ご縁があってご入社頂き、ITANDIで仲間として業務頂く事になった際、
普段の仕事の進め方を見せて頂くための「coding interview」を、
採用プロセスの一環として実施させて頂きたいと考えています。

あくまでも採用プロセスのため、大変僭越ながら合否を付けさせて頂く事になってしまうのですが、
その過程で、お互いについでの理解を深めチームとして共同作業するイメージをお互いに持つ事を目的としています。
そのため、いわゆる競技プログラミングのような問題ではなく、WebアプリケーションのAPI serverを実装する、
実際の業務を想定した内容となっています。


## 当日のお願い

* 当日は、Google Meetでカメラonでのビデオ通話に加えて、候補者様のPCの全画面共有を行って頂く想定です。
* 当日は、面接の様子を面接の品質向上のために録画させていただく場合がございます。
  * 録画を開始する際に、当日口頭でもお伺いいたします。
  * また、採用面接以外の用途に利用する事はございません。
* 品質向上のために、担当者以外の者がオブザーバーで参加させて頂く場合がございます。

## 当日までにご準備いただきたい事
大変お手数ですが、当日の進行をスムーズにするため、HTTP serverのプロセスが起動するところまで準備頂けますと幸いです。
大きく、localでネイティブに起動する / dockerで実行するの2つの方法をご用意させて頂いております。
お好きな方でご準備ください。

### localの場合
[node.js](https://nodejs.org/ja/) 作成時点での最新版、v14.15.4のinstallをお願い致します。

```
$ yarn install
$ yarn watch
```

serverが起動したら、以下のコマンドを実行してください。

```
curl -X POST \
     -H 'Content-Type: application/json' \
     http://localhost:3000/healthcheck -d '{"ping": true}'
```

`{"message":"pong"}` と表示されれば準備は完了です。


### dockerの場合
dockerを利用される場合は下記リンクを参考に、docker / docker-composeコマンドが利用できる状態にsetupをお願いいたします。
[Get Docker](https://docs.docker.com/get-docker/)
[install Docker Compose](http://docs.docker.jp/compose/install.html)

また、dockerのmemoryを大きくしておくこと(可能なら4GB~)を推奨します。


### application containerのsetup


下記のコマンドを実行し、セットアップとアプリケーションの起動を行います。

```
$ docker-compose build
$ docker-compose run --rm app yarn install
$ docker-compose up -d
```

稀にMySQLの起動に失敗する場合は、volumeの削除後、docker engineを再起動してください。

serverが起動したら、以下のコマンドを実行してください。

```
curl -X POST \
     -H 'Content-Type: application/json' \
     http://localhost:3000/healthcheck -d '{"ping": true}'
```

`{"message":"pong"}` と表示されれば準備は完了です。


#### 利用技術

尚、参考までに本リポジトリの利用技術は下記となっています。

* Node.js 14.15.4
* MySQL 5.7

プロダクトの技術に合わせて以下のmiddlewareを利用していますが、変更頂いても構いません。
web frameworkに [express](https://expressjs.com/ja/)
ORMには[Sequelize](https://sequelize.org/)


#### (windows userの方のみ)

coding interviewでは、準備時間の短縮の都合でapplicationをdocker containerとして実行し、
docker containerからlocalにvolume mountする事を想定しています。
そのため、dockerを利用される場合は予め共有ドライブへのvolume mountの設定をお願いします。

[VOLUME MOUNTING REQUIRES SHARED DRIVES FOR LINUX CONTAINERS](https://docs.docker.com/docker-for-windows/troubleshoot/#volume-mounting-requires-shared-drives-for-linux-containers)



# プログラミングのお題
ユーザがつぶやき(murmur)を表示することが可能な、webアプリケーション向けのAPI Serverを実装してください。

## model
本アプリケーションは以下の2つのmodelを持つものとします。
勿論、下記の仕様に応じて新しいモデルを増やして頂いても大丈夫です。

* murmurs
* users

## 仕様
* userは、他のuserをfollowすることができます。
* followすることで、他のuserが投稿したmurmurの一覧がtimelineに表示されるようになります。
* userはmurmurを何度でも投稿可能です。
* 投稿したuser自身だけが、自分のmurmurを削除できます。
* userは他人のmurmurに対して、likeをつける事が可能です。

### ポイント
* ご縁があって一緒にお仕事をさせて頂くイメージをつかむために、普段どのように仕事に取り組まれるかを私たちは知りたいと思っています。
* どこから取り掛かるかなどの進め方は自由です。時間内に終わらなくても全く構いません。
* もちろん、Web検索やお持ちの書籍などを参照いただいても構いません。
* 内容に関してのご質問などもなんでも聞いていただいて構いません。
* 普段通りのお仕事のスタイルを見せて頂きたいと考えています！
