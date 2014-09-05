//ミュータブルな分数
var Rational = function(numer, denom) {
    this.numer = numer || 0;
    this.denom = denom || 1;
};

Rational.prototype = {
    toString: function() {
        return this.numer + '/' + this.denom;
    },
    equals: function(rational) {
        var r = this.ensure(rational);
        return this.numer === r.numer && this.denom === r.denom;
    },
    ensure: function(r) {
        return (r instanceof Rational)?  r: new Rational(r, 1);
    },
    plus: function(rational) {
        var r = this.ensure(rational);
        this.numer = this.numer*r.denom + r.numer*this.denom;
        this.denom *= r.denom;
        return this;
    },
    minus: function(rational) {
        var r = this.ensure(rational);
        this.numer = this.numer*r.denom - r.numer*this.denom;
        this.denom *= r.denom;
        return this;
    },
    multiply: function(rational) {
        var r = this.ensure(rational);
        this.numer *= r.numer;
        this.denom *= r.denom;
        return this;
    },
    divide: function(rational) {
        var r = this.ensure(rational);
        this.numer *= r.denom;
        this.denom *= r.numer;
        return this;
    }
};


// 1/2
var half = new Rational(1,2);
// 1/2 + 1
var threeOverTwo = half.plus(1);

half === threeOverTwo;
// > true
half.equals(threeOverTwo);
// > true

// 3/2 * 2/3
threeOverTwo.multiply(new Rational(2,3));
// > 6/6