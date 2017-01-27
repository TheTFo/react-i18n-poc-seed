const ADD_NOTE = 'ADD_NOTE';
const addNoteAction = (note) => ({ type: ADD_NOTE, payload: note});

const CLEAR_NOTES = 'CLEAR_NOTES';
const clearNotesAction = () => ({ type: CLEAR_NOTES });

export const actions = {
  addNote: (note) => (dispatch) => {
    dispatch(addNoteAction(note));
  },
  clearNotes: () => (dispatch) => {
    dispatch(clearNotesAction());
  }
};

const actionHandlers = {
  [ADD_NOTE]: (state, action) => state.concat(action.payload),
  [CLEAR_NOTES]: () => []
};

export const notesReducer = (state = [], action) => {
  let handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
}