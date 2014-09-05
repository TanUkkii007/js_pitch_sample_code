//合計
[0,1,2,3,4,5].reduce(function(prev, current) {
    return prev + current;
});
// > 15
//平均
[0,1,2,3,4,5].reduce(function(prev, current, index, array) {
    return prev + current/array.length;
});
// > 2.5
//最大値
[0,1,2,3,4,5].reduce(function(prev, current, index, array) {
    return prev < current ? current : prev;
});
// > 5
//最小値
[0,1,2,3,4,5].reduce(function(prev, current, index, array) {
    return prev > current ? current : prev;
});
// > 0
//大きさの２乗
[0,1,2,3,4,5].reduce(function(prev, current) {
    return prev + current*current;
});
// > 55
//配列の平坦化
[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25],
].reduce(function(prev, current) {
    return prev.concat(current);
}, []);
// > [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]