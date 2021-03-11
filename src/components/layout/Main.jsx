import React from 'react';

// import mockupData from '../../mockupData';
import Movies from '../../components/Movies';
import Preloader from '../../components/Preloader';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    let searchValue = 'Matrix';

    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${
      import.meta.env.VITE_OMDB_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));

    // this.setState({ movies: mockupData });
  }

  render() {
    const { movies } = this.state;

    return (
      <main className='container content'>
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export default Main;
