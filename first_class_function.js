(function() {
    //第一級オブジェクトは
    //変数に代入できる
    var one = 1;
    
    //関数からの返り値として返すことができる
    function getOne() {
        return 1;
    }
    
    //関数の引数として渡すことができる
    function plusOne(num) {
        return num + 1;
    }
    plusOne(1);
    function identity(num) {
        return num;
    }
    //> 2
    
    //意味はないが値が書けるところにはどこにでも書ける
    1;
    "1";
    
    //メンバーとしてメソッドをもつ(実際にはStringオブジェクトにキャストされてからtoString()の呼び出しがおきる)
    "1".toString();
    
    //メンバーとしてプロパティをもつ(実際にはStringオブジェクトにキャストされてからlengthへのアクセスがおきる)
    "1".length;


    //第一級関数も同様
    //変数に関数を代入する
    var func = function() {};
    
    //関数からの返り値として関数を返す
    function emptyFunc() {
        return function() {};
    }
    
    //関数の引数として関数を渡す
    function result(f) {
        return typeof f === 'function' ? f() : f;   
    }
    
    //意味はないが値が書けるところにはどこにでも書ける
    (function(){});
    func;
    
    //関数がメンバーとしてメソッドをもつ
    (function(){}).apply(null, []);
    
    //関数がメンバーとしてプロパティをもつ
    (function(){}).length;

})();