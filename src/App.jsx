import React from 'react';
import { hot } from 'react-hot-loader';

import { Notifications } from './context/Notifications';
import NotificationsMenu from './headerbars/NotificationsMenu';

class App extends React.Component {

  // ...

  render() {
    // ...

    return (
      <div>
        Modify src/App.jsx and watch for prop-type errors in the console
        <Notifications>
          <NotificationsMenu />
        </Notifications>
      </div>
    );
  }
}

export default hot(module)(App);
