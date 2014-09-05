// ES6 const

const foo = 'foo';
//再代入しても値は変わらない
foo = 'bar';
console.log(foo);
// > foo

const cobj = {foo: 'foo'};
//再代入しても値は変わらない
cobj = {};
console.log(cobj.foo);
// > foo
//プロパティは変更できる
cobj.foo = 'bar';
console.log(cobj.foo);
// > bar

Object.freeze(cobj);
//Writableはfalse
cobj.foo = 'baz';
console.log(cobj.foo);
// > 'foo'
//Extensibleはfalse
cobj.bar = 'bar';
console.log(cobj.bar);
// > undefined