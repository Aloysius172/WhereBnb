import {connect} from 'react-redux'
import Dropdown from './dropdown';
import { logOut } from '../../actions/session/session_actions';
import { openModal } from '../../actions/modal/modal_actions';
import NavBar from './nav_bar';


const mSTP = ({session, entities}) => ({
  users: entities.users,
  currentUser: entities.users[session.id]
})

const mDTP = dispatch => ({
  logout: () => dispatch(logOut()),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(NavBar);