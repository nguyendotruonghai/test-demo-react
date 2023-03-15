// class component
// function component

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name : 'Hai',
        address : 'Quan 5',
        age : 33
    }

    handleClick(event) {
      //  console.log("Click me");
        //  console.log(event);
        console.log("My name is " , this.state.name);
    }

    handleOnMouseOver(event) {
        console.log(event.pageX);
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm From {this.state.address}
                <button onClick={this.handleClick}>CLick me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
            </div>
        )
    }
}

export default MyComponent;