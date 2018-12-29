import React from "react";
import autoBind from 'react-autobind';

import UserList from "./userlist";
import UserForm from "./userform";
import Header from "./header";
import "../css/userform.css";
class UserProfileContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      addUser: false,
      userData: {
        userName: '',
        userEmail: '',
        userGender: '',
        userPhone: '',
        userAddress: ''
      }
    }
    autoBind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    const { userData } = this.state;
    userData[name] = value;
    this.setState({
      userData,
    });
  }

  submitFormHandler(event) {
    const { userData } = this.state;
    event.preventDefault();
    this.setData();
    userData.userName = '';
    userData.userEmail = '';
    userData.userGender = '';
    userData.userPhone = '';
    userData.userAddress = '';
    this.setState({
      userData
    });
    this.togglePanel();
  }

  getData() {
    return JSON.parse(localStorage.getItem('list')) || [];
  }

  setData() {
    const { userData } = this.state;
    const data = this.getData();
    data.push(userData);
    this.saveDataToStorage(data);
  }

  saveDataToStorage(data) {
    localStorage.setItem('list', JSON.stringify(data));
  }

  togglePanel() {
    const { addUser } = this.state;
    this.setState({
      addUser: !addUser
    });
  }

  editUser(e, index) {
    const data = this.getData();
    const currentData = { ...this.state.userData, ...data[index] };
    this.setState({
      userData: currentData,
      addUser: true,
    });
  }

  deleteUser(e, index) {
    const data = this.getData();
    if (data.splice(index, 1)) {
      this.saveDataToStorage(data);
      this.forceUpdate(); // we delete item from local storage react don't know abt it
    }

  }

  render() {
    const { addUser } = this.state;
    return (
      <div className="container">

        <Header togglePanel={this.togglePanel} isAddUser={addUser} />

        <div className="table-mid-row">
          {
            addUser ?
              <UserForm
                handleChange={this.handleChange}
                submitFormHandler={this.submitFormHandler}
                togglePanel={this.togglePanel}
                {...this.state}
              /> :
              <UserList
                data={this.getData()}
                editUser={this.editUser}
                deleteUser={this.deleteUser}
              />
          }
        </div>

        <div className="table-bottom-row"></div>
      </div>
    );
  }
}

export default UserProfileContainer;
