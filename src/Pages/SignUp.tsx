import React from "react";
import CommonForm from "../Components/CommonForm";
import { RegisterProps } from "../utils/types";

const SignUp = () => {
  const RegisterObj: RegisterProps = {
    heading: "USER SIGNUP",
    type: "Signup",
    placeholder_email: "Email-Id",
    placeholder_username: "Username",
    placeholder_password: "Password",
    button_title: "SignUp",
  };
  return (
    <div>
      <CommonForm formDetails={RegisterObj} />
    </div>
  );
};

export default SignUp;
