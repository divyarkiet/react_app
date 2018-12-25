import React from "react";

class Header extends React.Component {
  constructor(){
    super(props);
    console.log(props);
  }

  render() {
    return 'hello';
    // return {props.status ? <div className="table-top-row">
    //         <button className="add-user" onClick={(e) => this.addUserHandler.bind(e)}>Add User</button>
    //         <input type="search" className="search" placeholder="Search" />
    //       </div> : ''}
  }
}

export default Header;