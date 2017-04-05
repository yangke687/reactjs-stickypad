var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
	handleviewAction: function(action) {
		var payload = {
			source: 'VIEW_ACTION',
			action: action
		};
		this.dispatcher(payload);
	}
});

module.exports = AppDispatcher;