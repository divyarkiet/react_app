
import React from "react";

class UserForm extends React.Component {

  constructor() {
    super();
    this.state = {
      userName: '',
      userEmail: '',
      userGender: '',
      userPhone: '',
      userAddress: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitFormHandler = this.submitFormHandler.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitFormHandler(event) {
    const { togglePanel } = this.props;
    console.log('form is initialized');
    event.preventDefault();
    this.setData();
    this.setState({
      userName: '',
      userEmail: '',
      userGender: '',
      userPhone: '',
      userAddress: '',
    });
    togglePanel();
  }

  getData() {
    return JSON.parse(localStorage.getItem('list'));
  }

  setData() {
    const data = this.getData() || [];
    data.push(this.state);
    localStorage.setItem('list', JSON.stringify(data));
  }

  render() {
    return (
      <form method="post" onSubmit={this.submitFormHandler}>
        <div className="form-group">
          <label htmlFor="userName">Name </label>
          <input type="text" className="form-control" name="userName" value={this.state.userName} onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="userEmail">Email </label>
          <input type="email" className="form-control" name="userEmail" value={this.state.userEmail} onChange={this.handleChange} />
        </div>

        <div className="radio">
          <label className="radio-inline"><input type="radio" name="userGender" value="M" onChange={this.handleChange} /> Male</label>
          <label className="radio-inline"><input type="radio" name="userGender" value="F" onChange={this.handleChange} /> Female</label>
        </div>

        <div className="form-group">
          <label htmlFor="userPhone">Phone No:</label>
          <input type="number" className="form-control" name="userPhone" value={this.state.userPhone} onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="userAddress">Address:</label>
          <textarea className="form-control" name="userAddress" value={this.state.userAddress} onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <button type="reset" className="btn btn-default btn-md reset">Reset</button>
          <button type="submit" className="btn btn-default btn-md">Submit</button>
        </div>
      </form>
    )
  }
}

export default UserForm;