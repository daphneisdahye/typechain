<br>

# TypeScript Blockchain Practice

これはTypeScriptで書かれた単純なブロックチェーンの例です。
TypeScriptの静的型チェックについて学び、例を通じてクラス、インターフェース、静的メソッド、Node.jsのcryptoモジュールなどを使用しました。

## 実装内容

1. Blockクラスは、前のブロックのハッシュ(prevHash)、高さ(height)、データ(data)を受け取り、新しいブロックのハッシュ(hash)を作成します。
2. Blockchainクラスは、ブロック配列(blocks)を持ち、getPrevHash()メソッドで前のブロックのハッシュを返し、addBlock()メソッドで新しいブロックを追加します。
3. Blockchainクラスは、getBlocks()メソッドでブロック配列を返します。

## 実行方法

コードを実行すると、新しいブロックが追加され、ブロック配列が出力されます。

```bash
$ npm install
$ npm start
```

## 参考資料
- [PoiemaWeb - TypeScript Class](https://poiemaweb.com/typescript-class)<br>
- JavaScriptにTypeScriptの.d.tsファイルを追加する<br>
https://github.com/DefinitelyTyped/DefinitelyTyped <br>
npm i -D dev @types/node

<br>
<br>
<br>
<br>
<br>
<br>


# TypeScript Blockchain Practice

TypeScript로 작성된 간단한 블록체인 예제입니다.
TypeScript의 정적 타입 검사에 대해 공부하였으며, 예제를 통해서 클래스, 인터페이스, 정적 메서드, Node.js의 crypto 모듈 등을 사용해 보았습니다.

## 구현 내용

1. Block 클래스는 이전 블록의 해시(prevHash), 높이(height), 데이터(data)를 입력받아 새로운 블록의 해시(hash)를 생성합니다.
2. Blockchain 클래스는 블록 배열(blocks)을 가지며, getPrevHash() 메서드로 이전 블록의 해시를 반환하고, addBlock() 메서드로 새로운 블록을 추가합니다.
3. Blockchain 클래스는 getBlocks() 메서드로 블록 배열을 반환합니다.


## 실행 방법

코드를 실행하면 새로운 블록을 추가하고, 블록 배열을 출력합니다.

```bash
$ npm install
$ npm start
```

## 참고자료
- [PoiemaWeb - TypeScript Class](https://poiemaweb.com/typescript-class)<br>
- Javascript에 typescript .d.ts.파일 추가하기<br>
https://github.com/DefinitelyTyped/DefinitelyTyped <br>
npm i -D dev @types/node
