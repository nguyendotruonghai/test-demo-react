// class component
// function component

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name : 'Hai',
        address : 'Quan 5',
        age : 33
    }

    //handleClick (event) {
      //  console.log("Click me");
        //  console.log(event);

       // console.log("My name is " , this.state.name);
      // console.log("My age is " , Math.floor((Math.random() * 100) + 1));
        // this.setState({
        //     name: 'Kenny',
        //     age :  Math.floor((Math.random() * 100) + 1)
        // })
        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    //}

    handleOnChangeInput = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name);
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm From {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input 
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}

                    />
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}

export default MyComponent;