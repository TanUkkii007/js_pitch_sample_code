//配列コンプリヘンション
//偶数のみを取り出す
var even = [x for (x of [1,2,3,4,5]) if (x % 2 === 0)];

//オブジェクトから配列へ変換（動かない）
var values = [v for v of {a: 'a', b: 'b'}];

//ペア
[[row, column] for (row of [1,2,3,4,5,6,7,8,9]) for (column of [1,2,3,4,5,6,7,8,9])];

//偶数のみを取り出す配列コンプリヘンションは
var even = [x for (x of [1,2,3,4,5]) if (x % 2 === 0)];

//今までは
var even = [];
for (var i = 0, array = [1,2,3,4,5]; i < 5; ++i) {
    if (array[i] % 2 === 0) {
        even.push(array[i]);
    }
}

//filterを使うと
var even = [1,2,3,4,5].filter(function(value) {
    return value % 2 === 0;
});


//ジェネレーター式
//偶数のみを取り出す
var even = (x for (x of [1,2,3,4,5]) if (x % 2 === 0) );
for (var v of even) {
    console.log(v);
}
// > 2 4

//九九
var qq = (row * column for (row of [1,2,3,4,5,6,7,8,9]) for (column of [1,2,3,4,5,6,7,8,9]));
for (var v of qq) {
    console.log(v);
}