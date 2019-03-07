import React, { Component } from 'react';

class QuoteSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div className="quote-search">
                <form onSubmit={this.props.handleSubmit}>
                    <input
                        name="value"
                        value={this.props.value}
                        onChange={this.props.handleChange}
                    />
                    <button type="submit">
                        <img src="img/search.png"/>
                    </button>
                </form>
            </div>
        )
    }
}

export default QuoteSearch