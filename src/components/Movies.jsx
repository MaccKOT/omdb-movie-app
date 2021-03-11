import React from 'react';
import Movie from './Movie';

const Movies = ({ movies = [] }) => {
  // movies = [], because we get undefined in case of error
  return (
    <div className='movies'>
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>No movies founded</h4>
      )}
    </div>
  );
};

export default Movies;
