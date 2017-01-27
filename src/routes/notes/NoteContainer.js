import { connect } from 'react-redux'
import { actions } from './modules/notes'
import NoteForm from './components/NoteForm'

const mapDispatchToProps = {
  ...actions
};

const mapStateToProps = (state) => {
  return { notes: state.notes };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)