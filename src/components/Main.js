require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from '../stores/index';
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
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={AppIndex}>
            <Route path="notes" component={NoteContainer}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
