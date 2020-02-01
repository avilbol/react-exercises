import React, { Component } from 'react';


class ItemList extends Component {

  noItemsFound = () => {
    return this.props.items.length === 0;
  };
  
  render() {
    return (
      <div class="container">
        <button onClick={this.props.onDeleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>

        <p className="items">Items</p>
        <ol className="item-list">
          {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </div>
    )
  }
}

export default ItemList;