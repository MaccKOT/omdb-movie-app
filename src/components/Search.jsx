import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
      <div className='row'>
        <div className='col s12'>
          <div className='input-field'>
            <input
              id='email_inline'
              type='search'
              className='validate'
              placeholder='Search'
              values={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              className='btn-small search-btn'
              onClick={() => {
                this.props.searchMovies(this.state.search);
              }}>
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
