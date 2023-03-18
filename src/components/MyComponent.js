// class component
// function component

import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Hai", age: 16 },
//       { id: 2, name: "Kenny", age: 26 },
//       { id: 3, name: "Roy", age: 69 },
//     ],
//   };

//   handleAddNewUser = (userOjs) => {
//     //bad code
//     // let listUserNew = this.state.listUsers;
//     // listUserNew.unshift(userOjs);
//     // this.setState({
//     //     listUsers : listUserNew
//     // })

//     this.setState({
//       // listUsers: [...this.state.listUsers,userOjs]
//       listUsers: [userOjs, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUserClone = this.state.listUsers;
//     listUserClone = listUserClone.filter(item => item.id !== userId);
//     this.setState({
//         listUsers : listUserClone
//     })
//   }

//   //JSX
//   render() {
//   const test = {name : 'Hai' , age : 20}
//   return (
//     <>
//       {JSON.stringify(test)}
//       <br/><br/>
//       <div className="a">
//         <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//         <br />
//         <br />
//         <DisplayInfo
//         listUsers={this.state.listUsers}
//         handleDeleteUser = {this.handleDeleteUser}
//         />
//       </div>
//       <div className="b"></div>
//     </>
//   );
// }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Hai", age: 16 },
    { id: 2, name: "Kenny", age: 26 },
    { id: 3, name: "Roy", age: 69 },
  ]);

 const handleAddNewUser = (userOjs) => {
    setListUsers([userOjs, ...listUsers])
    // this.setState({
    //   listUsers: [userOjs, ...this.state.listUsers],
    // });
  };
  const handleDeleteUser = (userId) => {
    let listUserClone = listUsers;
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUsers(listUserClone);
    // this.setState({
    //   listUsers: listUserClone,
    // });
  };
  return (
    <>
      <br />
      <div className="a">
        <AddUserInfo handleAddNewUser={handleAddNewUser} />
        <br />
        <br />
        <DisplayInfo
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
