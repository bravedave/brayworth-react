import React, { Component } from 'react';
import ArrowUp from './images/arrow-up.svg';

class Scrolltop extends Component {
    render() {
        return (<div>
            <img src={ArrowUp} className="float-right up-icon pointer"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

                    window.scrollTo({ left: 0, top: 130, behavior: 'smooth' });

                }}
                alt="up arrow" title="top of page" />

        </div>)

    }

}

export default Scrolltop;
