import React from "react";

class UserForm extends React.Component {

  submitFormHandler(event){
    console.log('form is initialized');
    return false;
  }

  render() {
    return (
      <form method="post" onSubmit={(e) => this.submitFormHandler(e)}>
        <div className="form-field">
          <label htmlFor="name">Name </label>
          <input type="text" name="user_name" />
        </div>
        
        <div className="form-field">
          <label htmlFor="user_email">Email </label>
          <input type="email" name="user_email" /><br />
        </div>
        
        <div className="form-field">
          <label htmlFor="user_gender">Gender:</label>
          <input type="radio" name="user_gender" /> Male<br />
          <input type="radio" name="user_gender" /> Female<br />
        </div>
        
        <div className="form-field">
          <label htmlFor="user_contact_no">Phone No:</label>
          <input type="number" name="user_contact_no" /><br />
        </div>
        
        <div className="form-field">
          <label htmlFor="user_address">Address:</label>
          <textarea name="user_address" /><br /><br />
        </div>
        
        <div className="form-field">
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default UserForm;