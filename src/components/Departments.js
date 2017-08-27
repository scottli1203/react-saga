import React from 'react';
import {getDepUsers} from '../actions'
import { connect } from 'react-redux'

let Departments = React.createClass({
    getDepUsers:function(depId){
        //this.props.dispatch(getDepUsers(depId))
        this.props.getDepUsers(depId);
    },

    render:function(){
        let data = this.props.deps;
        if(!data || JSON.stringify(data) == "{}"){
            return <div/>
        }
        return (
            <div>
                <span>选择部门：</span>
                <select className="form-control" onChange={(e) => this.getDepUsers(e.target.value)}>
                    {
                        data.map((item) => {
                            let {depId, depName} = item;
                            return <option value={depId} key={depId}>{depName}</option>
                        })

                    }
                </select>
            </div>

        );
   }
});

const mapStateToProps = state => {
    return {
        deps: state.getAllDeps.departments
    }
}


export default connect(mapStateToProps,{getDepUsers})(Departments)
