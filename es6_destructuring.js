//分割代入（デストラクチャリング）

//配列パターンによる分割
var [a,b] = [1,2];
console.log(a, b);
// > 1 2

//従来の値の交換
var tmp = a;
a = b;
b = tmp;

//分割代入による値の交換
[b, a] = [a,b];

//オブジェクトパターンによる分割
var half = {numer: 1, denom: 2};
var {numer, a, denom: b} = half;
console.log(a, b);
// > 1 2

//ネストも可能
var {name: name, family: {sister: sister}} = {name: 'John Doe', family: {sister: 1}}
console.log(name, sister);
// "John Doe" 1


var persons = [{name: 'John Doe', family: {sister: 1}}, {name: 'Taro', family: {father: 1}}];
//for文の最初のブロックにも書ける
for (var {name: name, family: {sister: sister}} of persons) {
    console.log(name, sister);
}
