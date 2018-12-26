import React from "react";

class UserForm extends React.Component {

  constructor(){
    super();
    this.state = {
      user_name: '',
      user_email: '',
      user_gender: '',
      user_contact_no: '',
      user_address: ''
    };
    this.data = this.data || [];
    this.handleChange       = this.handleChange.bind(this);
    this.submitFormHandler  = this.submitFormHandler.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitFormHandler(event){
    console.log('form is initialized');    
    event.preventDefault();
    this.setData();
    this.setState({
      user_name: '',
      user_email: '',
      user_gender: '',
      user_contact_no: '',
      user_address: '',
    });
  }

  getData(){
    return JSON.parse(localStorage.getItem('list'));
  }

  setData(){
    this.data = this.getData();
    let dataArray = this.state;
    this.data.push(dataArray);
    localStorage.setItem('list', JSON.stringify(this.data));
  }

  render() {
    return (
      <form method="post" onSubmit={this.submitFormHandler}>
        <div className="form-group">
          <label htmlFor="user_name">Name </label>
          <input type="text" className="form-control" name="user_name" value={this.state.user_name}  onChange={this.handleChange} />
        </div>
        
        <div className="form-group">
          <label htmlFor="user_email">Email </label>
          <input type="email"className="form-control" name="user_email" value={this.state.user_email} onChange={this.handleChange} />
        </div>
        
        <div className="radio">
          <label className="radio-inline"><input type="radio" name="user_gender" value="M" onChange={this.handleChange} /> Male</label>
          <label className="radio-inline"><input type="radio" name="user_gender" value="F" onChange={this.handleChange} /> Female</label>
        </div>
        
        <div className="form-group">
          <label htmlFor="user_contact_no">Phone No:</label>
          <input type="number" className="form-control" name="user_contact_no" value={this.state.user_contact_no} onChange={this.handleChange} />
        </div>
        
        <div className="form-group">
          <label htmlFor="user_address">Address:</label>
          <textarea className="form-control" name="user_address" value={this.state.user_address} onChange={this.handleChange} />
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