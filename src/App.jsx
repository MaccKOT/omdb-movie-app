import React from 'react';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

function App() {
  //API fetch
  // http://www.omdbapi.com/?s=star%20wars&apikey=xxxxxx
  // const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

  return (
    <div className=''>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
