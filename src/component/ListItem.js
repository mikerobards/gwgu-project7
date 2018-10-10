import React, { Component } from 'react';



export default class ListItem extends Component {
  render() {
    return (<li className="listItem"
      onClick={() => this.props.listItemClick(this.props)}>
      {this.props.name}
      <img src={this.props.categories[0].icon.prefix+"30"+this.props.categories[0].icon.suffix} alt={this.props.categories[0].name}/>
      {this.props.categories[0].name}
    </li>);
  }
}
