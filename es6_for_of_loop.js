//for-inループはキーを列挙する
for (var i in [1,2,3,4,5])
    console.log(i);
// > "0" "1" "2" "3" "4"

//for-inループは[[Enumerable]]なprototypeプロパティを列挙する
var F = function() {};
F.prototype = {enumerable: 'enumerable'};
var obj = new F();
for (var key in obj)
    console.log(obj[key], obj.hasOwnProperty(key));
// > enumerable false

//独自のデータ構造はfor-inでループできない
var LinkedList = function(value, next) {
    this.value = value;
    this.next = (next === undefined)? new LinkedList(null, null) : next;
};
var list = new LinkedList(1, new LinkedList(2, new LinkedList(3)));
for (var curr = list; curr.next !== null; curr = curr.next)
    console.log(curr.value);
// > 1 2 3


//for-ofループは値を列挙する
for (var i of [1,2,3,4,5])
    console.log(i);
// > 1 2 3 4 5
//@@iteratorを定義すれば、独自のデータ構造もループ可能
var LinkedList = function(value, next) {
    this.value = value;
    this.next = (next === undefined)? new LinkedList(null, null) : next;
};
LinkedList.prototype = {
    '@@iterator': function() {
        return {
            current: this,
            next: function() {
                var prev = this.current;
                this.current = prev.next;
                return {value: prev.value, done: prev.value === null};
            }
        };
    }
};
var list = new LinkedList(1, new LinkedList(2, new LinkedList(3)));
//@@iteratorの暗黙の呼び出しがおきる
for (var value of list)
    console.log(value);
// > 1 2 3


//ジェネレーターVer.
var LinkedList = function(value, next) {
    this.value = value;
    this.next = (next === undefined)? new LinkedList(null, null) : next;
};
LinkedList.prototype = {
    //ジェネレーターでイテレーターをつくる
    '@@iterator': function*() {
        for (var curr = list; curr.next !== null; curr = curr.next) {
            yield curr.value;
        }
    }
};
var list = new LinkedList(1, new LinkedList(2, new LinkedList(3)));
//@@iteratorの暗黙の呼び出しがおきる
for (var value of list)
    console.log(value);
// > 1 2 3