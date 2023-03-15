// class component
// function component

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name : 'Hai',
        address : 'Quan 5',
        age : 33
    }

    handleClick (event) {
      //  console.log("Click me");
        //  console.log(event);

       // console.log("My name is " , this.state.name);
      // console.log("My age is " , Math.floor((Math.random() * 100) + 1));
        this.setState({
            name: 'Kenny',
            age :  Math.floor((Math.random() * 100) + 1)
        })
        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }

    handleOnMouseOver(event) {
        console.log(event.pageX);
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm From {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}}>CLick me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
            </div>
        )
    }
}

export default MyComponent;