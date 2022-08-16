import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logIn } from '../../actions/session/session_actions';
import AuthForm from './auth_form';
import { openModal, closeModal } from '../../actions/modal/modal_actions'

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Login',
    // navLink: <Link to="/signup">Signup</Link>
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     action: (user) => dispatch(logIn(user)),
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    action: (user) => dispatch(logIn(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);