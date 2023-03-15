// class component
// function component

import React from 'react';

class MyComponent extends React.Component {

    state = {
        name : 'Hai',
        address : 'Quan 5',
        age : 33
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm From {this.state.address}
            </div>
        )
    }
}

export default MyComponent;