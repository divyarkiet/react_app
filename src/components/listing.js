import React from "react";
import "../css/userform.css";
import UserList from "./userlist";
import UserForm from "./userform";
import Header from "./header";

class Listing extends React.Component {

  constructor() {
    super();
    this.state = {
      addUser: false
    }
    this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel() {
    const { addUser } = this.state;
    this.setState({
      addUser: !addUser
    });
  }
  render() {
    const { addUser } = this.state;
    return (
      <div className="container">

        <Header togglePanel={this.togglePanel} isAddUser={addUser} />

        <div className="table-mid-row">
          {addUser ? <UserForm togglePanel={this.togglePanel}/> : <UserList />}
        </div>

        <div className="table-bottom-row"></div>
      </div>
    );
  }
}

export default Listing;
