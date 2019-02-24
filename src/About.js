import React, { Component } from 'react';
import iPhone from './images/iphone-profile.jpg';

class About extends Component {
    render() {
        return (
            <div>

            <h1 className="text-center">Web Developer
              <br className="d-block d-sm-none" />
              <span className="d-none d-sm-inline-block px-2"> - </span>
              <small className="subtitle">Full Stack</small></h1>
  
            <div className="row">
              <div className="col-8 col-sm-6">
                <p>BrayWorth is a Full Stack Web Development Company.</p>
  
                <p>Full Stack Web Development works with back end server-side languages
                    like PHP to find, save, or change data for front-end code.<br />
                    We use Linux, PHP and SQL.</p>
  
                <p>Full Stack Developers use front-end browser languages that
                    control how content looks on a site’s user-face side like 
                    - HTML, CSS, and JavaScript.<br />
                    We use Bootstrap and libraries like jQuery</p>
  
                <p>BrayWorth&apos;s Full Stack Developers speak database and
                    browser languages<br />
                    but importantly they speak your language.<br />
                    Discuss your project with us today.</p>
  
              </div>
  
              <div className="col-4 col-sm-3">
                <img className="img img-responsive img-thumbnail" alt="..." src={iPhone} />
  
              </div>
  
              <div className="col-12 col-sm-6 col-md-3">
                <div className="alert about-button-a text-center text-white">
                  HTML/CSS
  
                      </div>
  
                <div className="alert about-button-b text-center text-white">
                  Bootstrap
  
                      </div>
  
                <div className="alert about-button-c text-center text-white">
                  JavaScript
  
                      </div>
  
                <div className="alert about-button-d text-center text-white">
                  PHP
  
                      </div>
  
                <div className="alert about-button-e text-center text-white">
                  REST
  
                      </div>
  
                <div className="alert about-button-a text-center text-white">
                  DataBase
  
                      </div>
  
              </div>
  
            </div>
  
            <div className="row py-1">
              <div className="col">
                <p>Find our source code on <a
                  href="https://github.com/bravedave/"
                  target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github"></i> GitHub</a></p>
  
                <p>Find the source code for this web site at <a
                  href="https://github.com/bravedave/brayworth-www/"
                  target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> https://github.com/bravedave/brayworth-www/</a></p>
  
                <p>Find documentation of the MVC Web Application Architecture <a href="/docs/">
                  <i className="fa fa-sticky-note-o"></i> here</a></p>
  
                <p>Find .NET work at <a href="https://easydose.net.au"
                  target="_blank" rel="noopener noreferrer"> easydose.net.au</a></p>
  
                <p>Find some recent work at these websites:</p>
  
              </div>
  
            </div>
  
            <div className="row py-1">
              <div className="col-sm-6 col-md-3 offset-xl-2 col-xl-2 text-center">
                <a className="btn btn-block btn-outline-secondary"
                  href="https://www.darcy.com.au" target="_blank"
                  rel="noopener noreferrer">D&apos;Arcy Estate Agents</a>
  
              </div>
  
              <div className="col-sm-6 col-md-3 col-xl-2 text-center">
                <a className="btn btn-block btn-outline-secondary"
                  href="https://www.maricourt.com.au"
                  target="_blank" rel="noopener noreferrer">Mari Court</a>
  
              </div>
  
              <div className="col-sm-6 col-md-3 col-xl-2 text-center">
                <a className="btn btn-block btn-outline-secondary"
                  href="https://friendsofcurrumbin.com/"
                  target="_blank" rel="noopener noreferrer">FOC</a>
  
              </div>
  
              <div className="col-sm-6 col-md-3 col-xl-2 text-center">
                <a className="btn btn-block btn-outline-secondary"
                  href="https://www.bilingaslsc.com"
                  target="_blank" rel="noopener noreferrer">Bilinga SLSC</a>
  
              </div>
  
            </div>
  
          </div>
  
        )

    }

}

export { About}