import React, { Component } from "react";
import wordpress from "../api/wordpress";

class NavBar extends Component {
  state = {
    navItems: []
  };

  componentDidMount = async () => {
    const response = await wordpress.get("/acf/v3/menu");
    this.setState({ navItems: response.data.reverse() });
  };

  render = () => {
    return (
      <nav className="uk-navbar uk-navbar-container">
        <ul className="uk-navbar-nav">
          {this.state.navItems.map(item => {
            return (
              <li key={item.acf.name}>
                <a href={item.acf.link}>{item.acf.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };
}

export default NavBar;
