import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Dialog from 'material-ui/Dialog';

import {
  Card,
  CardHeader,
  CardTitle,
  CardActions,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { fetchItems } from './api';

class App extends Component {

  constructor() {
    super();
    this.state = {
      // url: 'https://api.themoviedb.org/3/search/movie?api_key=7317506170f1b233337a0a544dfb7770&language=en-US&page=1&include_adult=false&query=avengers',
      allMovies: [],
      datarecieved: false,
      search: ''
    };
    
    this.handleTextChange = this.handleTextChange.bind(this);
    this.search = this.search.bind(this);
  }
componentWillMount(){
const url = 'http://api.themoviedb.org/4/list/1?page=1&api_key=7317506170f1b233337a0a544dfb7770';
this.loadData(url);
}
  searchData(key) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=7317506170f1b233337a0a544dfb7770&query='+key
    this.loadData(url);
  }
loadData(url){
  const request = fetchItems(url);
  request.then(data => {
    console.log('&&', data);
    const json = data.response;
    if (json) {
      this.setState({
        allMovies: json.results,
        datarecieved: true
      });
    }
  });
  this.setState({
    search: ''
  })
}
  handleTextChange = (event) => {
    this.setState({
      search: event.target.value
    })
  };
  search = (event) => {
    this.searchData(this.state.search);

  };
  render() {
    let movieList;
    if (this.state.datarecieved) {
      const movies = this.state.allMovies;
      // const movieList = movies.filter(d => {
      //   return d.status === selectValue;
      // });
      movieList = movies.map(function(item) {
        return <MovieList data={item} />;
      });
    }

    return (
      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          <input type="text" value={this.state.search} onChange={this.handleTextChange} /> 
          <button onClick={this.search}>Search</button>
        </p>
      </div>  
      <div>{movieList}</div>
      </MuiThemeProvider>
    );
  }
}


class MovieList extends Component {
  render() {
    const { data } = this.props;
    return (
      <MuiThemeProvider>
            <Paper  style={{ margin: 30, width: 400, display: 'inline-block' }}  zDepth={3}>
                <Card style={{ padding: 10 }}>
                  <CardHeader
                    title={data.title}
                    subtitle={data.overview}
                     actAsExpander={true}
                    showExpandableButton={false}
                  />
                  <CardTitle
                    title={`Release Date : ${data.release_date}`}
                    subtitle={`Popularity : ${data.popularity}`}
                  />
                </Card>
            </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;
