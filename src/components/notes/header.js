import React from "react";


export class Header extends React.Component {

  logOut() {
    window.location.replace('/');
  }

  render() {
    return (

      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">GNotes</span>


        <span class="btn btn-outline-secondary float-right" onClick={() => this.logOut()} ><i class="fas fa-sign-out-alt"></i></span>
      </nav>

    );
  }
}


export default Header;