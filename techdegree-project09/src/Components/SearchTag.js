import React, {Component} from 'react';

class SearchTag extends Component {

  // When component first mounts:
  // -Search for photos using the provided title prop, i.e. "cats"
  componentDidMount() {
    this.props.onClick(this.props.title);
  }

  // When component receives new props:
  // -Search for photos using the new title prop as lons as..
  // ..it is different than the last title
  componentWillReceiveProps(nextProps) {
    if (nextProps.title !== this.props.title) {
      this.props.onClick(nextProps.title);
    }
  }

  render(){
    return(
      <h2>{this.props.title}</h2>
    );
  }
}

export default SearchTag;
