(function (){

	var Rectangle = Backbone.Model.extend({});

	var RectangleView = Backbone.View.extend({

		tagName: 'div',
		
		className: 'rectangle',
		
		render: function(){
			this.setDimensions();
			this.setPosition();
			this.setColor();
			return this;
		},

		setDimensions: function(){
			this.$el.css({
				width: this.model.get('width') + 'px',
				height: this.model.get('height') + 'px'
			});
		},

		setPosition: function() {
			var position = this.model.get('position');
			this.$el.css({
				left: position.x,
				top: position.y
			});
		},

		setColor: function () {
			this.$el.css('background-color', this.model.get('color'));
		}

	});

	var myRectangle = new Rectangle({
		width: 100,
		height: 60,
		position: {
			x: 300,
			y: 150
		},
		color: '#ff0000'
	});

	var myView = new RectangleView({model: myRectangle});

	$('div#canvas').append(myView.render().el);

})();