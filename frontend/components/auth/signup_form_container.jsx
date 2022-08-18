import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signUp, deleteErrors } from '../../actions/session/session_actions';
import AuthForm from './auth_form';
import { openModal, closeModal } from '../../actions/modal/modal_actions'

const mapStateToProps = ({ errors }) => { 
  // debugger
  return {
    errors: errors.session,
    formType: 'Signup',
    // navLink: <Link to="/login">Login</Link>
  }
};


const mapDispatchToProps = dispatch => {
  return {
    action: (user) => dispatch(signUp(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    deleteErrors: () => dispatch(deleteErrors())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);