import React from 'react';
import Category from './Category.js'

const Categories = (props) => {

  return (
    <div className="main-nav">
      <ul>
        <Category onClick={props.onClick} title="cats"/>
        <Category onClick={props.onClick} title="dogs"/>
        <Category onClick={props.onClick} title="computers"/>
      </ul>
    </div>
  );
}

export default Categories;
