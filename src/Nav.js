import React, { Component } from 'react';
import { Navbar, Navbrand, NavbarToggler, NavbarCollapse } from './react-bootstrap';
import PropTypes from 'prop-types'; // ES6

class Nav extends Component {
  render() {
    return (
      <Navbar>
        <Navbrand name="Brayworth Web Design" />
        <NavbarToggler target="NavCollapsed" />
        <NavbarCollapse id="NavCollapsed">
          <li className="nav-item">
            <a className="nav-link"
              href="https://mail.brayworth.com.au/webmail/"
              target="_blank" rel="noopener noreferrer">webmail</a>

          </li>

          <li className="nav-item">
            <div className="nav-link pointer" onClick={() => {
              let el = this.props.aboutRef.current;
              el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

            }}>about</div>

          </li>

          {/* <li className="nav-item">
            <div className="nav-link pointer" onClick={() => {
              let el = this.props.contactRef.current;
              el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

            }}>contact</div>

          </li> */}

        </NavbarCollapse>

      </Navbar>

    );

  }

}

Nav.propTypes = {
  aboutRef: PropTypes.object.isRequired,
  contactRef : PropTypes.object.isRequired

};

export { Nav };
