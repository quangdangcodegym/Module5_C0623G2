import React, { Component } from 'react';

class InputComponentClass extends Component {
    constructor(props) {
        super(props);
        console.log("INIT Component with: ", props);
    }
    componentDidMount() {
        // perform side effects after the component is mounted
        console.log("COMPONET ĐÃ ĐÍNH VÀO DOM");
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // perform side effects after the component is re-rendered
        console.log("COMPONET ĐÃ ĐƯỢC UPDATED");
    }
    componentWillUnmount() {
        // perform cleanup tasks before the component is unmounted
        console.log("COMPONET sẽ được UNMOUNTED");
    }
    render() {
        // Nhận props từ component cha

        console.log("COMPONET SẼ RENDER");
        const { message } = this.props;
        return (
            <div>
                {/* Sử dụng dữ liệu từ props */}
                {console.log(message)}
                <p>Input Component Class: {message}</p>
            </div>
        );
    }
}

export default InputComponentClass;










/*
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // initialize state
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    // update state based on props
    return null;
  }

  componentDidMount() {
    // perform side effects after the component is mounted
  }

  shouldComponentUpdate(nextProps, nextState) {
    // control whether the component should re-render or not
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // capture information before the component updates
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // perform side effects after the component is re-rendered
  }

  componentWillUnmount() {
    // perform cleanup tasks before the component is unmounted
  }

  render() {
    // return the UI of the component
    return (
      <div>
        </div >
        );
      }
    }

export default MyComponent;
*/