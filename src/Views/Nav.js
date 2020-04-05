import React, { Component } from 'react';
import { 
  NavLink,
  BrowserRouter 
} from 'react-router-dom';

export default class Nav extends Component {

  handleSubmit = query => {
    this.props.onSubmit(query);
  };
 
  render() {
    return (
      <BrowserRouter>
        <nav className="main-nav">
          <ul>
            <li><NavLink to="/sunsets" onClick={() => this.handleSubmit("sunsets")} >Sunsets</NavLink>
            </li>
            <li><NavLink to="/caves" onClick={() => this.handleSubmit("caves")}>Caves</NavLink>
            </li>
            <li><NavLink to="/waterfalls" onClick={() => this.handleSubmit("waterfalls")}>Waterfalls</NavLink>
            </li>
            </ul>
          </nav>
        </BrowserRouter>
     )};
  }






