
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";


import routes from "routes.js";

import image from "assets/img/superPeter.png";

class Free extends Component {
  constructor(props) {
    super();
    this.state = {
      image: image,
      color: "black",
      hasImage: true,
      fixedClasses: "dropdown show-dropdown open"
    };
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/free") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
                handleClick={this.handleNotificationClick}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };



  componentDidUpdate(e) {
    if (
      //chiude la navbar dopo click link se la risoluzione bassa
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    // torna in testa alla pagina una volta cliccato il link
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props}
          routes={routes}
          image={this.state.image}
          color={this.state.color}
          hasImage={this.state.hasImage} 
          view={'/free'}
          />

        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Switch>{this.getRoutes(routes)}</Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Free;

