import React from "react";

class Header extends React.Component {

  constructor(props){
    super(props);
    this.addUserHandler = this.addUserHandler.bind(this);
    this.userListing = this.userListing.bind(this);
  }

  addUserHandler(event){
    this.setState({addUser: true});
  }

  userListing(){
    this.setState({addUser: false});
  }

  render() {
    return (
      (!this.props.addUser) ? (<div className="table-top-row">
        <button type="button" className="btn btn-default btn-md add-user" onClick={this.addUserHandler}>Add User</button>
        <input type="search" className="search" placeholder="Search" />
      </div>) : <div className="table-top-row"><button type="button" className="btn btn-link" onClick={this.userListing}>Listing</button></div>
    )}
}

export default Header;