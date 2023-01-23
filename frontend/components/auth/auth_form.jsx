import React from 'react';
import { withRouter } from 'react-router-dom'

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  demoUser(e) {
    this.setState({ username: "demologin", password: 'demo123' })
  } 

  componentWillUnmount() {
    this.props.deleteErrors();
  }
 

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user)
    // debugger
    // if(!this.props.errors)this.props.closeModal();
    
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="authform-errors">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to WhereBnB!
          <br />
          {this.renderErrors()}
          {this.props.formType === 'Login' ? <button className="demo-login-button" onClick={this.demoUser}>Demo Login</button> : null}
          <div className="login-form">
            {/* <br /> */}
              <input type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.update('username')}
                className="login-input"
              />
           
            {/* <br /> */}
            { this.props.formType === 'Signup' ? 
                <input type="text"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.update('email')}
                  className="login-input"
                />
              : null }
            {/* <br /> */}
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-input"
              />        
            {/* <br /> */}
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
          {this.props.formType === 'Signup' ? <div className='other-form-option'>
            Already a member? <div className='other-form-option-button'>{this.props.otherForm}</div>
          </div> : null
          }
          {this.props.formType === 'Login' ? <div className='other-form-option'>
            Not a member? <div className='other-form-option-button'>{this.props.otherForm}</div>
          </div> : null
          }
       
          
            
          
        </form>
        
      </div>
    );
  }
}

export default withRouter(AuthForm);