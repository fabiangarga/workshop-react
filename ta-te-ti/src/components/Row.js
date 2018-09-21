import React, { Component } from 'react';

class Name extends Component {
    onClick = () => {
        this.props.onComponentClick();
    };
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <button onClick={this.onClick}>
                    Click me
                </button>
            </div>
        )
    }
}

export default Name;
