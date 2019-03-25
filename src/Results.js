import React, { Component } from 'react';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            quote: "",
            quoteNotFound: false
        }
        this.showResults = this.showResults.bind(this)
        this.showQuotes = this.showQuotes.bind(this)
    }

    getQuoteData() {
        fetch("https://cloud.iexapis.com/beta/stock/" + this.props.searchedStock + "/quote?token=pk_ca1c3efad6df4991b3c501c7519abcfc")
            .then(res => {
                if (!res.ok) {
                    this.setState({
                        isLoaded: true,
                        quoteNotFound: true
                    });
                    throw res;
                }
                return res.json()
            })
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        quote: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error)
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    /*** Figure out which lifecycle method to use!!! */
    /* https://reactjs.org/docs/react-component.html#componentdidmount */
    componentDidUpdate(prevProps) {
        if (this.props.searchedStock !== prevProps.searchedStock) {
            this.getQuoteData();
        }
    }

    componentDidMount() {
        this.getQuoteData();
    }

    showQuotes() {
        if (this.state.isLoaded && !this.state.quoteNotFound) {
            const { companyName, symbol, iexBidPrice, iexAskPrice, iexRealtimePrice } = this.state.quote;

            return (
                <div className="show-quotes">
                    <table>
                        <tbody>
                            <tr>
                                <th>Stock</th>
                                <th>Bid</th>
                                <th>Ask</th>
                                <th>Last</th>
                            </tr>
                            <tr>
                                <td>{companyName} ({symbol})</td>
                                <td>{ iexBidPrice ? "$" + iexBidPrice : "--"}</td>
                                <td>{iexAskPrice ? "$" + iexAskPrice : "--"}</td>
                                <td>{iexRealtimePrice ? "$" + iexRealtimePrice : "--"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        } else if (this.state.quoteNotFound) {
            return (
                <p>Quote not found for this ticker symbol.</p>
            )

        } else if (this.state.error) {
            return (
                <h2>{this.state.error}</h2>
            )
        } else {
            return (
                <h2>Loading...</h2>
            )
        }
    }

    showResults() {
        return (
            <div className="results">
                <p>Searched: {this.props.searchedStock}</p>
                <h1>Results</h1>
                {this.showQuotes()}
            </div>
        )
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