import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: '23React',
    url: 'https://reactjs.org/',
    author: 'sdfaaSSS',
    num_comments: 3,
    points: 4,
    objectID: 2,
  },
  {
    title: '1Rea3ct',
    url: 'https://reactjs.org/',
    author: 'SJordan WSalke',
    num_comments: 3,
    points: 4,
    objectID: 4,
  },
  {
    title: '4Rea4ct',
    url: 'https://reactjs.org/',
    author: 'JorFdan WaFlke',
    num_comments: 3,
    points: 4,
    objectID: 3,
  },
];

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());



class App extends Component {
  constructor() {
    super()
    this.state = {
      list,
      searchTerm: '',
    }

    this.onDismiss = this.onDismiss.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }
  
  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <Search 
            value={searchTerm}
            onChange={this.onSearchChange}
          >
            Search
          </Search>
          <Table 
            list={list}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
        </div>
      </div>
    );
  }
}

const Search = ({ value, onChange, children }) => 
    <form>
      {children}<input 
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>

const largeColumn = {
  width: '40%',
}
const mediumColumn = {
  width: '30%',
}
const smallColumn = {
  width: '10%',
}

const Table = ({ list, pattern, onDismiss }) =>
      <div className='table'>
        {list.filter(isSearched(pattern)).map(item => 
          <div key={item.objectID} className='table-row'> 
            <span style={largeColumn}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={mediumColumn}>
              {item.author}
            </span>
            <span style={smallColumn}>
              {item.num_comments}
            </span>
            <span style={smallColumn}>
              {item.points}
            </span>
            <span style={smallColumn}>
              <Button 
                className='button-inline'
                onClick={() => onDismiss(item.objectID)}
              >
                Dismiss
              </Button>
            </span>
          </div>
          )}
      </div>

const Button = ({onClick, className = '', children}) => 
      <button
        onClick={onClick}
        className={className}
        type="button"
      >
       {children}
      </button>


export default App;
