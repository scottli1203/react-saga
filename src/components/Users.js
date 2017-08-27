import React from 'react';
import {connect} from 'react-redux'

let UserInfo = React.createClass({
    render: function(){
        let data = this.props.users;
        if(!data || JSON.stringify(data) == "{}"){
            return <div />
        }
        return (
           <div>
               <p>部门人数列表：</p>
               <table className='table table-bordered'>
                   <thead>
                   <tr>
                       <th>#</th>
                       <th>用户名</th>
                       <th>邮箱</th>
                       <th>地址</th>
                   </tr>
                   </thead>
                   <tbody>
                   {
                       data.map((item) => {
                          return (
                              <tr key={item.userId}>
                                  <td>{item.userId}</td>
                                  <td>{item.username}</td>
                                  <td>{item.email}</td>
                                  <td>{item.address}</td>
                              </tr>
                          )

                       })
                   }
                   </tbody>
               </table>
           </div>
       )
   }
});

const mapStateToProps = (state) => ({
    users: state.getAllUsers.users
})


export default connect(mapStateToProps)(UserInfo);