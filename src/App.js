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
  state = {
    url: 'https://api.themoviedb.org/3/movie/550?api_key=7317506170f1b233337a0a544dfb7770',
    allMovies: [],
    datarecieved: false,
  };
  constructor() {
    super();
    this.state = {
      url: 'https://api.themoviedb.org/3/movie/550?api_key=7317506170f1b233337a0a544dfb7770',
      allMovies: [],
      datarecieved: false,
    };
  }

  componentWillMount() {
    const request = fetchItems(this.state.url);
    request.then(data => {
      console.log('&&', data);
      const json = data.response;
      if (json) {
        this.setState({
          allMovies: json,
          datarecieved: true
        });
      }
    });
  }

  render() {
    let movieList;
    if (this.state.datarecieved) {
      const movies = this.state.allMovies;
      // const movieList = movies.filter(d => {
      //   return d.status === selectValue;
      // });
      // movieList = movies.map(function(item) {
      //   return <MovieList data={item} />;
      // });
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          <input type="text" value={this.state.data} onChange={this.handleNameChange} /> 
          <button onClick={this.updateState} value={this.state.data}>Add</button>
          <button onClick={this.clearInput} >Clear</button>
        </p>
      </div>  
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
                    title={data.doctor_name}
                    subtitle={data.clinic_name}
                     actAsExpander={true}
                    showExpandableButton={true}
                  />
                  <CardTitle
                    title={data.procedure_name}
                    subtitle={data.appointment_time}
                  />
                </Card>
            </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;
