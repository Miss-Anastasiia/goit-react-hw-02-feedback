import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return message && <p>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
