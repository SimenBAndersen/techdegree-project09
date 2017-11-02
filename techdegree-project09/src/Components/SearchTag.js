import React, {Component} from 'react';

class SearchTag extends Component {

  componentDidMount() {
    this.props.onClick(this.props.title);
  }

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
