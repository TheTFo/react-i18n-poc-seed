require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import NoteAdder from './NoteAdder';
import NoteList from './NoteList';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteText: '',
      noteList: []
    };

    this.addNote = this.addNote.bind(this);
    this.noteTextChanged = this.noteTextChanged.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  noteTextChanged(text) {
    this.setState({ noteText: text });
  }

  addNote() {
    if (this.state.noteText) {
      this.setState({
        noteList: this.state.noteList.concat([this.state.noteText]),
        noteText: ''
      });
    }
  }

  clearList() {
    this.setState({ noteList: [] });
  }

  render() {
    return (
      <div className="index">
        <h1>Notes Application</h1>
        <h3>Instructions: Put some text in the box and click "Add Note"</h3>
        <NoteAdder
          noteText={this.state.noteText}
          onAddClick={this.addNote}
          onNoteTextChange={this.noteTextChanged} />
        <h2>
          { this.state.noteList.length > 0 ?
            `You have added ${this.state.noteList.length} notes.` :
            'No notes have been added yet.'}
        </h2>
        <NoteList
          onClickClear={this.clearList}
          notes={this.state.noteList} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
