//副作用の例
// 1/2
var half = {
    numer: 1,
    denom: 2
};
console.log(half.numer + '/' + half.denom);
// > 1/2

//halfに1を足す
function plusOne() {
    half.numer += half.denom;
}
//rationalをnumで割る
function devide(rational, num) {
    rational.denom *= num;
}

plusOne();
// > undefined
console.log(half.numer + '/' + half.denom);
// > 3/2;
devide(half, 2);
// > undefined
console.log(half.numer + '/' + half.denom);
// > 3/4


//副作用をもたない関数
//２つの分数r1, r2を足す
function plus(r1, r2) {
    return {
        numer: r1.numer*r2.denom + r2.numer* r1.denom,
        denom: r1.denom*r2.denom
    };
}
// 1/2
var half = {
    numer: 1,
    denom: 2
};
// 1/4
var quarter = {
    numer: 1,
    denom: 4
};
// 1/2 + 1/4
var threeOverFour = plus(half, quarter);

console.log(threeOverFour.numer + '/' + threeOverFour.denom);
// > 6/8

console.log(half.numer + '/' + half.denom);
// > 1/2

console.log(quarter.numer + '/' + quarter.denom);
// > 1/4