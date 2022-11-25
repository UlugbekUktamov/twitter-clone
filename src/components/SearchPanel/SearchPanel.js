import { Component } from "react";
import "./SearchPanel.css"


class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ""
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value
        this.setState({ term })
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input
                placeholder="Search by posts"
                type="text"
                className="form-control search-input"
                onChange={this.onUpdateSearch}
            />
        );
    }
}

export default SearchPanel;