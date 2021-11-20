import React from "react";
import "./SearchBar.css";

 class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.search = this.search.bind(this);
    this.handleTermCgange = this.handleTermCgange.bind(this);
  }

search() {
  this.props.onSearch(this.state.term);
}

handleTermCgange(event) {
  this.setState({term: event.target.value});
}

  render() {
    return (
      <div className="SearchBar">
        <input onChange = {this.handleTermCgange} placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
