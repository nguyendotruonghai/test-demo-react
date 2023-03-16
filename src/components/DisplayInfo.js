import React from "react";

class DisplayInfo extends React.Component {
    state = {
        isShowListUser : true
    }
  handleShowHide = () => {
    this.setState({
        isShowListUser : !this.state.isShowListUser
    })
  };
  render() {
    // cu phap destructuring array/object = const name/age = this.props.name/age
    //const {name, age} = this.props;
    const { listUsers } = this.props; // const listUsers = this.props.listUsers
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true ? 'Hide list user' : 'Show List User'}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>Id {user.id}</div>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
