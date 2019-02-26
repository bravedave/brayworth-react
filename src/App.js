import React, { Component } from 'react';
import background from './images/bg-1600.jpg';
import './App.css';
import { Nav } from './Nav';
import { Contact } from './Contact';
import { About } from './About';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import jQuery from 'jquery';

class App extends Component {
  constructor(props) {   // Optional, declare a class field to improve readability
    super(props);
    this.aboutRef = React.createRef();
    this.contactRef = React.createRef();
    this.catchaVerified = 'no';

    this.soz = '';

  }

  componentDidMount() {
    let _me = this;
    window.grecaptcha.ready(function () {
      window.grecaptcha.execute('6Le2OXgUAAAAAJlZnzozDmuZeI2B-mbmJKqABvq3', { action: 'homepage' }).then(function (token) {
        let options = {
          url: '/',
          type: 'POST',
          data: {
            action: 'verify-captcha',
            token: token

          },

        };

        jQuery.ajax(options).then(function (d) {
          if ('ack' === d.response) {
            if (d.data.success) {
              _me.soz = d.soz;
              _me.catchaVerified = 'yes';
              _me.forceUpdate();
              
              // console.log(d);

            }

          }

        });

      });

    });

  }

  render() {
    if ('yes' === this.catchaVerified) {
      return (
        <div className="App">
          <Nav aboutRef={this.aboutRef} contactRef={this.contactRef} verified={this.catchaVerified} />
          <div id="parallax">
            <img src={background} alt="..." />

          </div>

          <div className="parallax"></div>

          <div className="container-fluid py-4 bg-white" ref={this.aboutRef}>
            <About />

          </div>

          <div className="parallax"></div>

          <div className="container-fluid py-4 bg-white" ref={this.contactRef}>
            <Contact soz={this.soz} />

          </div>

          <div className="parallax"></div>

        </div>

      );

    }
    else {
      return (
        <div className="App">
          <Nav aboutRef={this.aboutRef} contactRef={this.contactRef} verified={this.catchaVerified} />
          <div id="parallax">
            <img src={background} alt="..." />

          </div>

          <div className="parallax"></div>

          <div className="container-fluid py-4 bg-white" ref={this.aboutRef}>
            <About />

          </div>

          <div className="parallax"></div>

        </div>

      );

    }

  }

}

export default App;
