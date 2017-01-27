require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import NoteAdder from './NoteAdder';
import NoteList from './NoteList';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteText: ''
    };

    this.addNote = this.addNote.bind(this);
    this.noteTextChanged = this.noteTextChanged.bind(this);
  }

  noteTextChanged(text) {
    this.setState({ noteText: text });
  }

  addNote() {
    if (this.state.noteText) {
      this.props.addNote(this.state.noteText);
      this.setState({ noteText: '' });
    }
  }

  render() {
    return (
      <div className="note-form">
        <h3>Instructions: Put some text in the box and click "Add Note"</h3>
        <NoteAdder
          noteText={this.state.noteText}
          onAddClick={this.addNote}
          onNoteTextChange={this.noteTextChanged} />
        <h2>
          { this.props.notes.length > 0 ?
            `You have added ${this.props.notes.length} notes.` :
            'No notes have been added yet.'}
        </h2>
        <NoteList
          onClickClear={this.props.clearNotes}
          notes={this.props.notes} />
      </div>
    );
  }
}

NoteForm.propTypes = {
  notes: React.PropTypes.array,
  addNote: React.PropTypes.func.isRequired,
  clearNotes: React.PropTypes.func.isRequired
};

export default NoteForm;
