import React from "react";

class UserList extends React.Component {
  render() {
    return (
        <table>
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
            <tr>
              <td>1</td>
              <td>Divya Rajput</td>
              <td>divya@gmail.com</td>
              <td>F</td>
              <td>1234567890</td>
              <td>Noida</td>
              <td>Edit | Delete</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Neha Rajput</td>
              <td>neha@gmail.com</td>
              <td>F</td>
              <td>09876554321</td>
              <td>Delhi</td>
              <td>Edit | Delete</td>
            </tr>
          </tbody>
        </table>
    );
  }
}

export default UserList;