var AppActions = require('../actions/AppActions');

module.exports = {
	addNote: function(note) {
		$.ajax({
			url: 'https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=qeoxvvzxTAt4-7I0MwZAX0nbbBALylmc',
			data: JSON.stringify(note),
			type: 'POST',
			contentType: 'application/json'
		});
	}
}