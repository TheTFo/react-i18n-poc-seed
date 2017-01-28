import { connect } from 'react-redux'
import { translate } from 'react-i18next';
import { actions } from './modules/notes'
import NoteForm from './components/NoteForm'

const mapDispatchToProps = {
  ...actions
};

const mapStateToProps = (state) => {
  return { notes: state.notes };
};

const translateComponent = translate(['common'], { wait: true })(NoteForm);
export default connect(mapStateToProps, mapDispatchToProps)(translateComponent);