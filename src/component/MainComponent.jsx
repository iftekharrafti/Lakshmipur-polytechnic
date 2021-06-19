import React, { Component } from 'react';
import Technology from './Technology';
import Navigation from './Navigation';
import ResultDetails from './ResultDetails';
import Result from './Result';
import ResultFullDetails from './ResultFullDetails';
import {Route} from 'react-router-dom';
import Footer from './footer/Footer';

import './nav.css';

class MainComponent extends Component{
    render() {
        return (
            <div>
                
                <Navigation />
                
                <Route path="/" exact render={() => <ResultDetails />} />
                
                <Route path="/technology" exact component={Technology} />

                <Route path="/detail" exact render={() => <ResultFullDetails />} />
                {/* <ResultFullDetails /> */}
                <Footer />
            </div>
        )
    }
}

export default MainComponent;