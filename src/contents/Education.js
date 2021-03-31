import React, {Component} from 'react';

import Widecard from '../components/Widecard';

class Education extends Component{
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title= "Bachelor's of Computer Science" where="University of North Texas" from="Jan 2019" to="Dec 2020"/>
            </div>

        )
    }
}

export default Education