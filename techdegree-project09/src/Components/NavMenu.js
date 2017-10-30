import React from 'react';
import SearchForm from './SearchForm.js';
import Categories from './Categories.js';
import Results from './Results.js';
import NotFound from './NotFound.js';

const NavMenu = () => {

  return (
    <div className="container">
      <SearchForm />
      <Categories />
      <Results />
      <NotFound />
    </div>
  );
}

export default NavMenu;
