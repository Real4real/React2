import React, {Component} from "react";

export default class SearchPanel extends Component {
    state = {
      term: ''
    };
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term)
    };
    render() {
        return (
            <div className="mdl-textfield mdl-js-textfield">
                <input type="text"
                       className="mdl-textfield__input"
                       id="sample1"
                        value={this.state.term}
                        onChange={this.onSearchChange}
                />
                <label htmlFor="sample1" className="mdl-textfield__label">Search</label>
            </div>
        );
    }
};
