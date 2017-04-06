var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	addNote: function(note) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_NOTE,
			note: note
		});
	},
	receiveNotes: function(notes) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECV_NOTES,
			notes: notes
		});
	},
	removeNote: function(id) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_NOTE,
			noteId: id
		});
	}
}

module.exports = AppActions;