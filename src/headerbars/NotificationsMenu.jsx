import React from 'react';
import PropTypes from 'prop-types';

import { withNotifications } from '../context/Notifications';

class NotificationsMenu extends React.Component {

  // ...

  render() {
    const { notifications } = this.props;

    // ...

    return null;
  }
}

NotificationsMenu.propTypes = {
  notifications: PropTypes.array.isRequired,
};

export default withNotifications(NotificationsMenu);
