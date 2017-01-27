import React from 'react';

const NoteList = (props) => {
  return (
    <div className="note-list">
      <button onClick={props.onClickClear}>Clear List</button>
      <ul>
        {props.notes ? props.notes.map((n) => <li>{n}</li>) : null}
      </ul>
    </div>
  );
};

NoteList.defaultProps = {
  notes: React.PropTypes.array,
  onClickClear: React.PropTypes.func.isRequired
};

export default NoteList;
