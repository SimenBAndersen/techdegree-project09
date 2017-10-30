import React from 'react';
import Category from './Category.js'

const Categories = () => {

  return (
    <div className="main-nav">
      <ul>
        <Category title="cats"/>
        <Category title="dogs"/>
        <Category title="computers"/>
      </ul>
    </div>
  );
}

export default Categories;
