import React, { Component } from 'react';
import QuoteSearch from './QuoteSearch';

class Header extends Component {


    render () {
        return (
            <header>
                <h2>Stock Quote</h2>
                <QuoteSearch value={this.props.value} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}/>
            </header>
        )
    }
}

export default Header;