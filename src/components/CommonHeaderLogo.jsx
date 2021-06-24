import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo.svg';
import engr from '../img/engr.png';
import dot from '../img/dot.svg';

const CommonHeaderLogo = ({
  showSplitPage = true,
  children,
  title,
  subtitle = "For the purpose of industry regulation, your details are required."
}) => {
  const splitClass = showSplitPage ? 'col-md-6' : '';

  return (
    <div className="row min-row ">
      <div className={`${splitClass} col-12 bg-white card d-md-block d-lg-block d-xl-block`}>
        <div className="main-body">
              <div className="card-body">
                <div>
                  <Link to="/">
                    <img src={logo} className="img-fluid" alt="" srcSet="" />
                  </Link>
                </div>
                <div className="div-body">
                  {
                    showSplitPage &&
                      <>
                        <p className="main-text font-weight-bold">{title}</p>
                        <p className="text-gray">{subtitle}</p>
                      </>
                  }
                  {children}
                </div>
              </div>
            </div>
      </div>
      {
        showSplitPage &&
          <div className="col-md-6 bg-gray d-none d-md-block d-lg-block d-xl-block">
            <div className="main-body">
              <img src={engr} className="img-fluid"/>
              <div className="text-center mt-5">
                <p className="font-semibold text-second mb-0">
                  Get detailed support
                </p>
                <p className="text-gray col-lg-8 mx-auto ">A little description here to show something about get detailed support</p>
              </div>
              <div className="footer mt-3">
                <img src={dot} alt="" className="img-fluid" srcSet=""/>
              </div>
            </div>
          </div>
      }
    </div>
  );
}

export default CommonHeaderLogo;
