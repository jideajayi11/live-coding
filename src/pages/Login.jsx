import React from 'react';
import { Link } from "react-router-dom";
import Input from '../components/Input';
import CommonHeaderLogo from '../components/CommonHeaderLogo';

const Login = () => {
  return (
    <CommonHeaderLogo
      title="Hi, Welcome Back!"
    >
      <form className="my-3">
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
        <p data-toggle="modal" data-target="#forgot" className="forgot"><i className="fa fa-lock pr-2"></i> Forgotten Password ?</p>

        <button type="submit" className="btn btn-primary mt-5 form-control">Login</button>
        
        <p className="text-gray mt-3">Not yet registered?<span><Link to="/register" className="font-semibold"> Create an account</Link> </span> </p>
      </form>
    </CommonHeaderLogo>
  );
}

export default Login;
