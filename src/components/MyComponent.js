// class component
// function component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
    state = {
        listUsers : [
            {id : 1, name : "Hai" , age: 16},
            {id : 2, name : 'Kenny', age: 26},
            {id : 3, name : 'Roy' , age : 69}
        ]
    }

  //JSX
  render() {
    return (
      <div>
        <UserInfo />
        <br/><br/>
        <DisplayInfo listUsers={this.state.listUsers}/>
      </div>
    );
  }
}

export default MyComponent;
