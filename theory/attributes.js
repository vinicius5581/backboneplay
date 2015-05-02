//https://www.youtube.com/watch?v=V9rKOoSkb5M&index=13&list=PLQUMc4-0pHw6_vUL1ty11EvDIgydBI_BL

var Vehicle = Backbone.Model.extend({});

var ford = new Vehicle();

ford.set('type', 'car');

ford.set({
	'maximumSpeed': '99',
	'color': 'blue'
});

console.log(ford.get('type'));


ford.set('description', '<script>alert("script injection")</script>');

console.log(ford.escape('description'));