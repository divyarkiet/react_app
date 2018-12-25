import React from "react";
import "../css/userform.css";
import UserList from "./userlist";
import UserForm from "./userform";
// import Header from "./header";

class Listing extends React.Component {

  constructor(){
    super();
    this.state = {
      addUserForm: false
    }
    this.userListing = this.userListing.bind(this);
  }

  addUserHandler(event){
    this.setState({addUserForm: true});
  }

  userListing(){
    this.setState({addUserForm: false});
  }

  render() {
    return (
      <div className="container">        
        {!this.state.addUserForm ? (<div className="table-top-row">
            <button type="button" className="btn btn-default btn-md add-user" onClick={(e) => this.addUserHandler(e)}>Add User</button>
            <input type="search" className="search" placeholder="Search" />
          </div>)  : <div className="table-top-row"><button type="button" className="btn btn-link" onClick={this.userListing}>Listing</button></div>}
        

        <div className="table-mid-row">
         {this.state.addUserForm ? <UserForm /> : <UserList />}          
        </div>
        
        <div className="table-bottom-row"></div>
      </div>
    );
  }
}

export default Listing;
