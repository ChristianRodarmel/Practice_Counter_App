import React, { Component } from 'react'

class Counter extends Component {
    render() {
        return (
            <div>
            <h1>Counter</h1>
            <h2>{this.props.count}</h2>
            <button onClick={this.props.inc}>Up</button>
            <button onClick={this.props.reset}>Reset</button>
            <button onClick={this.props.dec}>Down</button>
            </div>
        )
    };
}

export default Counter;