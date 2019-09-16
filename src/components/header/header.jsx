import React from "react";


export class Header extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            
            <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">G Notes</span>
          </nav>
          
        );
      }
    }
  

export default Header;