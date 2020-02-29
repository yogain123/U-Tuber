import React, { Component } from "react";
import debounce from "../services/debounce";
import _ from "lodash";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: this.props.searchText };
    this.onInputChange = this.onInputChange.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);
    this.searchBarRef = React.createRef();
  }

  componentDidMount() {
    this.searchBarRef.current.focus();
  }

  handleOnchange(event) {
    this.setState({ term: event.target.value });
    debounce(this.onInputChange, 9000)(event.target.value);
  }

  _handleKeyPress = e => {
    if (e.key === "Enter") {
      this.onInputChange(e.target.value);
    }
  };

  onInputChange(term) {
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="form-group" data-testid="form-group">
        <input
          value={this.state.term}
          type="text"
          onChange={this.handleOnchange}
          onKeyPress={this._handleKeyPress}
          className="form-control"
          placeholder="Search Video"
          ref={this.searchBarRef}
        />
      </div>
    );
  }
}
export default SearchBar;
