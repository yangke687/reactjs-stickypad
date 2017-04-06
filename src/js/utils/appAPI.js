var AppActions = require('../actions/AppActions');

module.exports = {
	addNote: function(note) {
		$.ajax({
			url: 'https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=qeoxvvzxTAt4-7I0MwZAX0nbbBALylmc',
			data: JSON.stringify(note),
			type: 'POST',
			contentType: 'application/json'
		});
	},
	getNotes: function() {
		$.ajax({
			url: 'https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=qeoxvvzxTAt4-7I0MwZAX0nbbBALylmc',
			dataType: 'json',
			cache: false,
			success: function(data) {
				AppActions.receiveNotes(data);
			}.bind(this),
			error: function(xhr, stat, err) {
				console.log(err);
			}.bind(this)
		});
	}
}