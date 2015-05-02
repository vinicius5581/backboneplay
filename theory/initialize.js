/*
Initializes a special model method if specified will be called when the object is
constructed so it's what a lot like your typical constructor that you would have been a
class in c# or many other languages

-> If a model type has an 'initialize' function defined it will be called when the model is instantiated
*/


var Vehicle = Backbone.Model.extend({
	initialize: function () {
		console.log('Vehicle created');
	}
});

var car = new Vehicle();
