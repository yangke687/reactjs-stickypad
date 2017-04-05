var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _notes = [];

var AppStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	},
	addNote: function(note){
		_notes.push(note);
	},
	getNotes: function(){
		return _notes;
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action;
	switch(action.actionType){
		case AppConstants.ADD_NOTE:
			console.log('adding note...');
			// store save
			AppStore.addNote(action.note);
			// api save
			// emit change
			AppStore.emit(CHANGE_EVENT);
			break;
	}
});

module.exports = AppStore;