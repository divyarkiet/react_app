import React from "react";

class UserList extends React.Component {

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate called');
  }

  fetchUserList(){
    let data = JSON.parse(localStorage.getItem('list'));
    return data.map((val, index) => {
      return (
        <tr key={index++}>
          <td>{index}</td>
          <td>{val.user_name}</td>
          <td>{val.user_email}</td>
          <td>{val.user_gender}</td>
          <td>{val.user_contact_no}</td>
          <td>{val.user_address}</td>
          <td>Edit | Delete</td>
        </tr>
      )
    })
  }

  render() {
    return (
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.fetchUserList()}
          </tbody>
        </table>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate called');
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate called');
  }  
}

export default UserList;