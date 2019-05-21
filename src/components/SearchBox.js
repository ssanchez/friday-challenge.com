import React, { Component } from "react";
import { Link } from "gatsby";
import { Index } from "elasticlunr";

const Result = ({ id, path, tags, title }) => (
  <li key={id}>
    <Link to={path}>{title}</Link>
    {tags && `: ${tags.join(`,`)}`}
  </li>
);

// Search component
class SearchBox extends Component {
  state = {
    query: "",
    results: []
  };

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex);

  handleSearch = ({ target: { value: query } }) => {
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref))
    });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <input type="text" value={query} onChange={this.handleSearch} />
        <ul>
          {this.state.results.map(page => (
            <Result {...page} />
          ))}
        </ul>
      </>
    );
  }
}

export default SearchBox;
