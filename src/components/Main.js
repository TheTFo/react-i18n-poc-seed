require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import NoteContainer from '../routes/notes/NoteContainer';

const AppIndex = (props) => {
  return (
    <div className="index">
      <h1>Notes Application</h1>
      {props.children}
    </div>
  );
};

class AppComponent extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppIndex}>
          <Route path="notes" component={NoteContainer}/>
        </Route>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
