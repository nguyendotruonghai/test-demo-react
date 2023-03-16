import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "Hai",
    address: "Quan 5",
    age: 33,
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    // bad code - do not use : this.state.age = event.target.value
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name);
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm From {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <lable>Your name: </lable>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <lable>Your age: </lable>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
