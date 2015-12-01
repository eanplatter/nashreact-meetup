import React, {createClass} from 'react';
import {render} from 'react-dom';

const App = createClass({
  getInitialState() {
    return {
      list: [],
    };
  },

  handleSubmit(e) {
    e.preventDefault();
    if (this.refs.newItemForm[0].value) {
      const newList = this.refs.newItemForm[0].value;

      this.setState({
        list: [...this.state.list, newList],
      });

      this.refs.newItemForm[0].value = '';
    }
  },

  handleDelete(index) {
    const newList = this.state.list.slice();
    newList.splice(index, 1);
    this.setState({
      list: newList,
    });
  },

  render() {
    const list = this.state.list.map((item, index) => {
      return (
        <li key={`${item}${index}`}>
          <i onClick={this.handleDelete.bind(null, index)} className='large close icon' />
          {item}
        </li>
      );
    });
    return (
      <div className='ui container'>
        <h1>
          Todo List
        </h1>
        <form ref='newItemForm' onSubmit={this.handleSubmit}>
          <input placeholder='New Item'/>
          <button>
            Add Item
          </button>
        </form>
        <div className='ui divider'/>
        {list}
      </div>
    );
  }
});

render(<App />, document.getElementById('root'));




