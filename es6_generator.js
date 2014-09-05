//ジェネレーター
//実行コンテクストを内包する第一級コルーチンオブジェクト
//ジェネレーター関数を定義
function* fibonacci() {
    var [prev, curr] = [0, 1];
    for(;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (n of fibonacci()) {
    if(n > 1000)
        break;
    console.log(n);
}
//1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
//ジェネレーターの生成
var seq = fibonacci();
//次の値の取得
seq.next();

//関数の引数に渡す
function getUntilThousand(g) {
    for (n of g) {
        if(n > 1000)
            break;
        console.log(n);
    }
}

//for-inループはキーを列挙する
for (var i in [1,2,3,4,5])
    console.log(i);
// > "0" "1" "2" "3" "4"
//for-ofループは値を列挙する
for (var i of [1,2,3,4,5])
    console.log(i);
// > 1 2 3 4 5

//@@iteratorを定義すれば、独自のデータもループ可能
var iterable = {
    data: [],
    '@@iterator': function() {
        return {
            data: this.data,
            index: 0,
            next: function() {
                return {value: this.data[this.index++], done: this.index > this.data.length};
            }
        };
    }
};

iterable.data = [1,2,3,4,5];

for (var i of iterable) {
    console.log(i);
}

//ジェネレーター関数を使う場合
var iterable = {
    data: [],
    '@@iterator': function*() {
        for (var i = 0, length = this.data.length; i < length; ++i)
            yield this.data[i];
    }
};

iterable.data = [1,2,3,4,5];
for (var i of iterable) {
    console.log(i);
}