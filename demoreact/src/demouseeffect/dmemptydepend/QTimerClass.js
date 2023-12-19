import React, { Component } from 'react';

class QTimerClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        };
    }

    componentDidMount() {

        console.log("Component QTimerClass mounted");
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                time: prevState.time + 1,
            }));
        }, 1000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Trả về true nếu bạn muốn component được cập nhật,
        // false nếu không muốn component được cập nhật.
        // return nextState.time % 2 === 0;
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        // Được gọi sau khi component đã được cập nhật.
        console.log('Component đã được cập nhật:', prevState, '=>', this.state);
    }

    componentWillUnmount() {
        console.log("THỰC THI VIỆC CLEAN");
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>Thời gian đã trôi qua {this.state.time} giây</div>
        );
    }
}

export default QTimerClass;