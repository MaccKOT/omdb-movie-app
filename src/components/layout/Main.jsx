import React from 'react';

// import mockupData from '../../mockupData';
import Movies from '../../components/Movies';
import Preloader from '../../components/Preloader';
import Search from '../../components/Search';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.searchMovies('Matrix');

    //or download data from mockupData directly to state
    // this.setState({ movies: mockupData });
  }

  searchMovies = (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${
      import.meta.env.VITE_OMDB_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export default Main;
