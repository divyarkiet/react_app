import React from "react";

class UserForm extends React.Component {

  submitFormHandler(event){
    console.log('form is initialized');
    return false;
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitFormHandler(e)}>
        <div className="form-group">
          <label for="user_name">Name </label>
          <input type="text" className="form-control" name="user_name" />
        </div>
        
        <div className="form-group">
          <label for="user_email">Email </label>
          <input type="email"className="form-control"  name="user_email" />
        </div>
        
        <div className="radio">
          <label className="radio-inline"><input type="radio" name="user_gender" /> Male</label>
          <label className="radio-inline"><input type="radio" name="user_gender" /> Female</label>
        </div>
        
        <div className="form-group">
          <label for="user_contact_no">Phone No:</label>
          <input type="number" className="form-control" name="user_contact_no" />
        </div>
        
        <div className="form-group">
          <label for="user_address">Address:</label>
          <textarea className="form-control" name="user_address" />
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