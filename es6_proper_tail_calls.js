//再帰による階乗計算
function factorial1(n) {
    if (n === 0)
        return 1;
    return n * factorial1(n - 1);
}

//ループによる階乗計算
function factorial2(n) {
    var result = 1;
    for (var i = 1; i <= n; ++i) {
        result *= i;
    }
    return result;
}

// 5 * 4 * 3 * 2 * 1
console.log(factorial1(5));
// > 120

console.log(factorial2(5));
// > 120