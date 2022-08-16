import { connect } from 'react-redux';
import { logout } from '../../actions/session/session_actions';
import { openModal } from '../../actions/modal/modal_actions';
import HeaderBar from './header_bar';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
