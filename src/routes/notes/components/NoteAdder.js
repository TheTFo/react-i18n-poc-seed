import React from 'react';

const NoteAdder = (props) => {
  return (
    <div className="note-adder">
    <input type="text" value={props.noteText} onChange={(e) => props.onNoteTextChange(e.target.value)} />
    <button onClick={() => props.onAddClick(props.noteText)}>Add Note</button>
    </div>
  );
};

NoteAdder.defaultProps = {
  noteText: React.PropTypes.string,
  onAddClick: React.PropTypes.func.isRequired,
  onNoteTextChange: React.PropTypes.func.isRequired
};

export default NoteAdder;
