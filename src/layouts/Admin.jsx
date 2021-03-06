
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";



import { withAuthorization } from '../components/Session/';




import routes from "routes.js";

// import image from "assets/img/superPeter.png";
import image from "assets/img/loading-bubbles.svg";

class Admin extends Component {
  constructor(props) {
    super();
    this.state = {
      image: image,
      color: "white",
      hasImage: true,
      fixedClasses: "dropdown show-dropdown open"
    };
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
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

  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1 
      ) {
        return routes[i].name;
      }
    }
    return "Link non disponibile tra i routes"; //Se il link non esiste?
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
          view = {'/admin'}
          />

        <div id="main-panel" className="main-panel" ref="mainPanel">
          <AdminNavbar
            {...this.props}
            // Nome estratto della pagina che si guarda
            brandText={this.getBrandText(this.props.location.pathname)} />
          <Switch>{this.getRoutes(routes)}</Switch>
          <Footer />
        </div>
      </div>
    );
  }
}


const condition = authUser => authUser;
 

export default withAuthorization(condition)(Admin);