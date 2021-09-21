import React from "react";
import "./style.css";

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["mobileno"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your name.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()!]).{8,12}$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter strong password with length min 8 and max 12.";
      } else {
        errors["password1"] = "Strong password.";
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
          <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>
            <label>Name</label>
            <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.username}</div>
            <label>Mobile No:</label>
            <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.mobileno}</div>
            <label>Password</label>
            <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.password}</div>
            <input type="submit" className="button" value="Register" />
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
