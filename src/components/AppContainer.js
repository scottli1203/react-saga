import React from 'react';
import Departments from './Departments';
import UserInfo from './Users';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';

let AppContainer = React.createClass({
    render:function(){
        return (
            <div className="container-main">
                <Departments/>
                <UserInfo/>
            </div>
        )
    }

});

export default AppContainer;
