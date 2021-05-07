import React from 'react';
import { Link } from "react-router-dom";
import Input from '../components/Input';
import CommonHeaderLogo from '../components/CommonHeaderLogo';

const Register = () => {
  return (
    <CommonHeaderLogo
      title="Register Account"
    >
      <form className="my-3">
        <Input
          label="Your fullname"
          placeholder="Enter your fullname"
          labelhtmlFor="name"
        />
        <Input
          label="Email address"
          placeholder="Enter email address"
          labelhtmlFor="email"
          type="email"
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          labelhtmlFor="password"
          type="password"
        />
        <Input
          label="I agree to terms & conditions"
          placeholder=""
          labelhtmlFor="exampleCheck1"
          type="checkbox"
          divClass = "form-check"
          labelClass = "form-check-label text-gray"
          inputClass = "form-check-input"
          checked = "checked"
        />

        <button type="submit" className="btn btn-primary mt-5 form-control">Register</button>

        <p className="text-gray mt-3">Already have an adddress?<span><Link to="/login" className="font-semibold"> Login to account</Link> </span> </p>
      </form>
    </CommonHeaderLogo>
  );
}

export default Register;
