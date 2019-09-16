import React from "react";
import "./style.scss";
import loginImg from "../../logo.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.username === "admin" && this.state.password === 'admin') {

      toast.success('Great Succesfully Logged in !', {
        hideProgressBar: false
      });
      window.location.replace('/notes');

    }
    else {
      toast.error('Incorrect Id or Password', {
        autoClose: 2000,
        hideProgressBar: false,
        containerId: 'C'
      });
    }




  }

  render() {
    return (

      <form onSubmit={this.onSubmit}>
        <div class="base-container" ref={this.props.containerRef}>
          <ToastContainer hideProgressBar={false} position={toast.POSITION.TOP_RIGHT} />
          <div class="header">Welcome</div>
          <div class="content">
            <div class="image">
              <img alt="reactlogo" src={loginImg} />
            </div>
            <div class="form">
              <div class="form-group" required>
                <input required type="text" name="username" placeholder="User Name" value={this.state.username} onChange={this.handleChange} />
              </div>
              <div class="form-group" required>
                <input required type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
              </div>
            </div>
          </div>
          <div class="footer">
            <button type="submit" class="btn btn-outline-secondary">
              <i class="fas fa-sign-in-alt"></i> Login
          </button>

          </div>
        </div>
      </form>
    );
  }
}