//https://www.youtube.com/watch?v=IdFBHpEIyrA&list=PLQUMc4-0pHw6_vUL1ty11EvDIgydBI_BL&index=12

var A = Backbone.Model.extend({
	initialize: function () {
		console.log('initialize A');
	},

	asString: function () {
		return JSON.stringify(this.toJSON());
	}
});

var a = new A({
		one: '1',
		two: '2'
});

console.log(a.asString());


var B = A.extend({});

var b = new B({
	three: '3'
});

console.log('asString inherited from A');
console.log(b.asString());

console.log('b instanceof B');
console.log(b instanceof B);

console.log('b instanceof A');
console.log(b instanceof A);

console.log( 'b instanceof Backbone.Model');
console.log( b instanceof Backbone.Model);

console.log('a instanceof B');
console.log(a instanceof B);