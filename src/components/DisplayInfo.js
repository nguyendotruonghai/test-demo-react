import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

//stateless vs stateful
// class DisplayInfo extends React.Component {
//     render() {
//       console.log('call me render');
//       // cu phap destructuring array/object = const name/age = this.props.name/age
//       //const {name, age} = this.props;
//       const { listUsers } = this.props; // const listUsers = this.props.listUsers
//       return (
//         <div className="display-info-container">
//           {true && (
//             <>
//                   {listUsers.map((user) => {
//                 return (
//                   <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                     <div>Id {user.id}</div>
//                     <div>My name's {user.name}</div>
//                     <div>My age's {user.age}</div>
//                     <div>
//                       <button
//                         onClick={() => this.props.handleDeleteUser(user.id)}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 );
//                   })}
//             </>
//           )}
//         </div>
//       );
//     }
// }

const DisplayInfo = (props) => {
  const { listUsers } = props; // const listUsers = this.props.listUsers
  // cu phap destructuring array/object = const name/age = this.props.name/age
  //const {name, age} = this.props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  console.log("Call me render");
  useEffect(() => {
    if (listUsers.length === 0) {
      alert("You deleted all the users");
    }
    console.log("Call me useEffect");
  }, [listUsers]);

  return (
    <div className="display-info-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide List Users" : "Show List Users"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>Id {user.id}</div>
                <div>My name's {user.name}</div>
                <div>My age's {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfo;
