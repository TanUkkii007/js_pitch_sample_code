//イミュータブルな分数
var Rational = function(numer, denom) {
    this.numer = numer || 0;
    this.denom = denom || 1;
};

Rational.prototype = {
    toString: function() {
        return this.numer + '/' + this.denom;
    },
    ensure: function(r) {
        return (r instanceof Rational)?  r: new Rational(r, 1);
    },
    equals: function(rational) {
        var r = this.ensure(rational);
        return this.numer === r.numer && this.denom === r.denom;
    },
    plus: function(rational) {
        var r = this.ensure(rational);
        var numer = this.numer*r.denom + r.numer*this.denom;
        var denom = this.denom * r.denom;
        return new Rational(numer, denom);
    },
    minus: function(rational) {
        var r = this.ensure(rational);
        var numer = this.numer*r.denom - r.numer*this.denom;
        var denom = this.denom * r.denom;
        return new Rational(numer, denom);
    },
    multiply: function(rational) {
        var r = this.ensure(rational);
        var numer = this.numer * r.numer;
        var denom = this.denom * r.denom;
        return new Rational(numer, denom);
    },
    divide: function(rational) {
        var r = this.ensure(rational);
        var numer = this.numer * r.denom;
        var denom = this.denom * r.numer;
        return new Rational(numer, denom);
    }
};

// 1/2
var half = new Rational(1,2);

// 1/2 + 1
var threeOverTwo = half.plus(1);
// > 3/2

half === threeOverTwo;
// > false

console.log(half);
// > 1/2
console.log(threeOverTwo);
// > 3/2

// 3/2 * 2/3
threeOverTwo.multiply(new Rational(2,3));
// > 6/6

console.log(threeOverTwo);
// > 3/2