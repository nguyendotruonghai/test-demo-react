import React from "react";

class DisplayInfo extends React.Component {
  render() {
        // cu phap destructuring array/object = const name/age = this.props.name/age
        //const {name, age} = this.props;
        const {listUsers} = this.props; // const listUsers = this.props.listUsers
      
        return (
            <div>
                {listUsers.map((user) => {
                    return (
                        <div>
                            <div>Id {user.id}</div>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age}</div>
                        </div>
                    )
                })}
                {/* <div>My name's {this.props.name}</div>
                <div>My age's {this.props.age}</div>
                <hr/>
                <div>My name's {this.props.name}</div>
                <div>My age's {this.props.age}</div> */}
            </div>
    )
  }
}

export default DisplayInfo;
