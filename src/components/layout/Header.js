import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <span className="navbar-brand" >Todo-App</span>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><Link to={process.env.PUBLIC_URL + '/'}>Home</Link><span className="sr-only">(current)</span></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
