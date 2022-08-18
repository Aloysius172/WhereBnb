import { connect } from 'react-redux';
import { logOut } from '../../actions/session/session_actions';
import { openModal } from '../../actions/modal/modal_actions';
import HeaderBar from './header_bar';



const mapStateToProps = ({ session, entities }) => ({
  users: entities.users,
  currentUserName: entities.users[session.id],
  currentUser: session.id
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
