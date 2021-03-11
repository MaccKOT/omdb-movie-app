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
      loading: true,
    };
  }

  // TODO! More films loading with page param (now its load only 10 films)

  componentDidMount() {
    this.searchMovies('Matrix'); //default search after app loading

    //or download data from mockupData directly to state
    // this.setState({ movies: mockupData });
  }

  searchMovies = (searchValue, type = 'all') => {
    const url = `https://www.omdbapi.com/?s=${searchValue}${
      type !== 'all' ? `&type=${type}` : ''
    }&apikey=${import.meta.env.VITE_OMDB_API_KEY}`;

    this.setState({ loading: true });

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
        {!loading ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export default Main;
