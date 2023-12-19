import React, { Component } from 'react';


class C6InputComponentClass extends Component {
    constructor(props) {
        super(props);
        console.log("INIT Component with: ", props);
    }
    render() {
        return (
            <h2>HELLO C6</h2>
        )
    }

}

export default C6InputComponentClass;