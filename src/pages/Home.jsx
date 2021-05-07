import React from 'react';
import { Link } from "react-router-dom";
import CommonHeaderLogo from '../components/CommonHeaderLogo';
import logo from '../img/welcome.svg';

const Home = () => {
  return (
    <CommonHeaderLogo
      title=""
      subtitle=""
      showSplitPage={false}
    >
      <div className="row justify-content-center">
        <div className="col-md-5 col-xs-12">
          <div className="bg-gray rounded-circle w-100 p-3">
            <img src={logo} className="img-fluid" alt="logo" />
          </div>
          
          <p className="main-text font-weight-bold text-center">Welcome onboard</p>
          <p className="mx-auto text-gray text-center">You can now access your dashboard, make transactions and track your products seamlessly</p>
          <Link to="/login" className="row">
            <div className="col-md-2"></div>
            <button type="submit" className="col-xs-12 col-md-8 btn btn-primary mt-3 form-control">Go to Login</button>
          </Link>
        </div>        
      </div>
    </CommonHeaderLogo>
  );
}

export default Home;
