import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// import components from Views folder
import './css/index.css';
import axios from 'axios';
import SearchForm from './Views/SearchForm';
import PhotoList from './Views/PhotoList';
import apiKey from './config';
import Nav from './Views/Nav'
import Error404Page from './Views/Error404Page';

// Create app class and export 
export default class App extends Component {
  
// Create original state of objects
  constructor() {
    super();
    this.state = {
      photos: [],
      query: "",
      title: "",
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
// Construct api url and set perform search query on api results
  performSearch = (query = 'waterfalls') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          query: query,
          title: query,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  };
  
// Render document elements to page with api search results
  render() { 
    // console.log(this.state.photos);
    // console.log(this.state.title);
    return (
      <BrowserRouter>
        <div className="container">
            <SearchForm onSearch={this.performSearch} />        
            <Nav onSubmit={this.performSearch} /> 
            <div className="photo-container">
            <h2>Results for {this.state.title}</h2>
            {
              this.state.loading ? (
               <p>Loading...</p>
              ) : (
              // Render page as loading until search results revealed, show query tag results. Default set to show Waterfalls, else show 404 error page.
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/waterfalls"/>} />
                <Route exact path="/:query" render={()  =>  <PhotoList photos={this.state.photos} query={this.state.query}/>} />
                <Route component={Error404Page} />
              </Switch>
            )}   
        </div>
      </div>
      </BrowserRouter>
    );
  }
}


