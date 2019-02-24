import React, { Component } from 'react';
import background from './images/bg-1600.jpg';
import './App.css';
import { Nav } from './Nav';
// import { Contact } from './Contact';
import { About } from './About';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

class App extends Component {
  constructor(props) {   // Optional, declare a class field to improve readability
    super(props);
    this.aboutRef = React.createRef();
    this.contactRef = React.createRef();

  }

  render() {
    return (
      <div className="App">
        <Nav aboutRef={this.aboutRef} contactRef={this.contactRef} />
        <div id="parallax">
          <img src={background} alt="..." />

        </div>

        <div className="parallax"></div>

        <div className="container-fluid py-4 bg-white" ref={this.aboutRef}>
          <About />

        </div>

        <div className="parallax"></div>

        {/* <div className="container-fluid py-4 bg-white" ref={this.contactRef}>
          <Contact />

        </div> */}

        <div className="parallax"></div>

      </div>

    );

  }

}

export default App;
