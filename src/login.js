import React from 'react';
import logo from './img/welcome.svg';
import Input from './components/Input';

function Login() {
  return (
    <div className="row min-row ">
      <div className="col-md-6 col-12 bg-white card d-md-block d-lg-block d-xl-block">
        <div className="main-body">
              <div className="card-body">
                <div>
                  <img src={logo} class="img-fluid" alt="" srcset="" />
                </div>
                <div className="div-body"> 
                <p className="main-text font-weight-bold">Hi, Welcome Back!</p>
                <p className="text-gray">For the purpose of industry regulation, your details are required.</p>

                <form className="my-3">
                  
                  <Input />
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="" placeholder="Enter your password" />
                  </div>
                  <p data-toggle="modal" data-target="#forgot" className="forgot"><i class="fa fa-lock pr-2"></i> Forgotten Password ?</p>

                  <button type="submit" className="btn btn-primary mt-5 form-control">Login</button>
                  
                  <p className="text-gray mt-3">Not yet registered?<span><a href="/register.html" class="font-semibold"> Create an account</a> </span> </p>
                  </form>
                </div>
              </div>
            </div>
      </div>
      <div className="col-md-6 bg-gray d-none d-md-block d-lg-block d-xl-block">

      </div>
    </div>
  );
}

export default Login;
