import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <FormInput
          name="email"
          label="Email"
          value={this.state.email}
          required
          handleChange={this.handleChange}
        ></FormInput>
        <FormInput
          name="password"
          label="Password"
          value={this.state.password}
          required
          handleChange={this.handleChange}
        ></FormInput>
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </div>
    );
  }
}

export default SignIn;
