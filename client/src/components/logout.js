import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class logout extends Component{
    render(){
        return(
            <div>
                <h1>You are not logged</h1>
                <Link to="/">Login again</Link>
            </div>
        )
    }
}