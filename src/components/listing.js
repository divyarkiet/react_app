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
  }

  addUserHandler(event){
    console.log('hello');
    this.setState({addUserForm: true});
  }

  render() {
    return (
      <div className="container">

        <div className="table-top-row">
          <button type="button" className="btn btn-default btn-md add-user" onClick={(e) => this.addUserHandler(e)}>Add User</button>
          <input type="search" className="search" placeholder="Search" />
        </div>

        <div className="table-mid-row">
         {this.state.addUserForm ? <UserForm /> : <UserList />}          
        </div>
        
        <div className="table-bottom-row"></div>
      </div>
    );
  }
}

export default Listing;
