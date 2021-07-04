import React, { Component, createContext } from 'react';
import Technology from './Technology';
import Navigation from './Navigation';
import ResultDetails from './ResultDetails';
import ResultFullDetails from './ResultFullDetails';
import Contact from './Contact';


import {Route} from 'react-router-dom';
import Footer from './footer/Footer';

import './nav.css';

export const UserContext = createContext();

class MainComponent extends Component{
    render() {
        return (
            <div> 
        
                    <Navigation />
                    
                    <Route path="/" exact render={() => <ResultDetails />} />
                    
                    <Route path="/technology" exact component={Technology} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/users">
                       <ResultFullDetails />
                   </Route> 

                    {/* <Route path="/detail" exact render={() => <ResultFullDetails />} /> */}
                
                    <Footer />
                
            </div>

        )
    }
}

export default MainComponent;