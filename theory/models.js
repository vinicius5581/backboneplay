/*
Bacbone model types are a javascript constructor functions therefore to 
create a model object, call its constructor functione with the new operator. 

If there's nothing unique about your model type there's no 
need to define a custom model type so you can just use the backbone
dot model constructor.
*/
var model = new Backbone.Model();
/*
Usually you'll be instantiating custom types

Vehicle is a custom backbone model constructor function
*/
var Vehicle = Backbone.Model.extend({});
/*
Ford is a new object created from Vehicle
*/
var ford = new Vehicle();

/*
It's commomto provide a model's data as an argument to the constructor

In the case bellow the properties name and age are setted for the newly created model object
*/

var model = new Backbone.Model({
	name: 'Peter',
	age: 52
});


/*
Models can inherit from other models just as we stand back banged-up model to  efine our
own model type
*/