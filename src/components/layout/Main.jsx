import React from 'react';

import mockupData from '../../mockupData';
import Movies from '../../components/Movies';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    // fetch('url')
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ movies: data.Search }));

    this.setState({ movies: mockupData });
  }

  render() {
    const { movies } = this.state;

    return (
      <main className='container content'>
        {movies.length ? (
          <Movies movies={movies} />
        ) : (
          <h5>Loading movies...</h5>
        )}
      </main>
    );
  }
}

export default Main;
