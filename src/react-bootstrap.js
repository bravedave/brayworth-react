import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class Navbar extends Component {
    render() {
        return (
            <nav
                className="navbar sticky-top navbar-dark bg-dark navbar-expand-sm py-1"
                role="navigation">
                {this.props.children}
            </nav>

        )

    }

}


class Navbrand extends Component {
    render() {
        return (
            <div className="navbar-brand">{this.props.name}</div>

        )

    }

}

class NavbarToggler extends Component {
    render() {
        return (
            <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target={'#' + this.props.target}
                aria-controls={this.props.target}
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>

            </button>

        )

    }

}

class NavbarCollapse extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id={this.props.id}>
                <ul className="navbar-nav mr-auto">
                    {this.props.children}

                </ul>

            </div>

        )

    }

}

Navbar.propTypes = {
    children : PropTypes.any

}

Navbrand.propTypes = {
    name : PropTypes.string
    
}

NavbarToggler.propTypes = {
    target : PropTypes.any

}

NavbarCollapse.propTypes = {
    id : PropTypes.string,
    children : PropTypes.any

}

export { Navbar, Navbrand, NavbarToggler, NavbarCollapse };
