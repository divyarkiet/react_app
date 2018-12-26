import React from "react";
import "../css/userform.css";
import UserList from "./userlist";
import UserForm from "./userform";
import Header from "./header";

class Listing extends React.Component {

  constructor(){
    super();
    this.state = {
      addUser: false
    }    
  }  

  render() {
    return (
      <div className="container">

        <Header addUser={this.state.addUser}/>

        <div className="table-mid-row">
         {this.state.addUser ? <UserForm /> : <UserList />}          
        </div>
        
        <div className="table-bottom-row"></div>
      </div>
    );
  }
}

export default Listing;
