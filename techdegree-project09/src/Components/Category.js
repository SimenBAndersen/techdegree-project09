import React, {Component} from 'react';

class Category extends Component {

  handleClick = e => {
    e.preventDefault();
    this.props.onClick(this.props.title);
  }

  render() {
    return (
      <li><a href='' onClick={this.handleClick}>{this.props.title}</a></li>
    );
  }
}

export default Category;
