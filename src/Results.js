import React, { Component } from 'react';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    showResults() {
        if (this.props.showResults) {
            return (
                <div className="results">
                    <p>{this.props.value}</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.showResults()}
            </div>
        )
    }
}

export default Results