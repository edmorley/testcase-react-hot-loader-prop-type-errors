import React from 'react';
import PropTypes from 'prop-types';

export const NotificationsContext = React.createContext({});

export class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
    this.value = {
      ...this.state,
    };
  }

  // ...

  setValue(newState, callback) {
    this.value = { ...this.value, ...newState };
    this.setState(newState, callback);
  }

  render() {
    return (
      <NotificationsContext.Provider value={this.value}>
        {this.props.children}
      </NotificationsContext.Provider>
    );
  }
}

Notifications.propTypes = {
  children: PropTypes.object.isRequired,
};

export function withNotifications(Component) {
  return function NotificationComponent(props) {
    return (
      <NotificationsContext.Consumer>
        {context => (
          <Component
            {...props}
            notifications={context.notifications}
          />
        )}
      </NotificationsContext.Consumer>
    );
  };
}
