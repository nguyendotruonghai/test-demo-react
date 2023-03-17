// class component
// function component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

class MyComponent extends React.Component {
    state = {
        listUsers : [
            {id : 1, name : "Hai" , age: 16},
            {id : 2, name : 'Kenny', age: 26},
            {id : 3, name : 'Roy' , age : 69}
        ]
    }

    handleAddNewUser = (userOjs) => {
        //bad code
        // let listUserNew = this.state.listUsers;
        // listUserNew.unshift(userOjs);
        // this.setState({
        //     listUsers : listUserNew
        // })
    
        this.setState({
            // listUsers: [...this.state.listUsers,userOjs]
            listUsers: [userOjs,...this.state.listUsers]
        })
    }

  //JSX
  render() {
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser}/>
        <br/><br/>
        <DisplayInfo 
        listUsers={this.state.listUsers}
        />
      </div>
    );
  }
}

export default MyComponent;
