var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AddNoteForm = React.createClass({
	render: function(){
		return (<div>
			<h5>Add Note</h5>
			<form onSubmit={this.onSubmit}>
				<div className="row">
					<div className="large-12 columns">
						<label htmlFor="">Note Text
							<input type="text" ref="text" placeholder="Enter Text..." />
						</label>
						<button className="button">Add</button>
					</div>
				</div>
			</form>
		</div>);
	},

	onSubmit: function(evt){
		evt.preventDefault();
		var note = {
			text: this.refs.text.value.trim()
		};

		AppActions.addNote(note);
	}
});

module.exports = AddNoteForm;