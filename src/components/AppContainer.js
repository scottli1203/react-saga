import React from 'react';
import Departments from './Departments';
import UserInfo from './Users';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import {ComponentA,ComponentB,ComponentA3,ComponentB3} from "./HOCComponent"


//
//function PrintName(props){
//     return <div>{props.name}</div>
// }
const PrintName = props => {
    return <div>{props.name}</div>
}

let AppContainer = React.createClass({
    render:function(){
        return (
            <div className="container-main">
                <Departments/>
                <UserInfo/>
                <PrintName name='lichuanwei'/>
            <ComponentA3 name='ComponentA3'/>
            <ComponentB3 name='ComponentB3'/>
            </div>
        )
    }

});

export default AppContainer;
