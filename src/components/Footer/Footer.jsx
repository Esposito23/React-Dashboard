
import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                Home
              </li>
              <li>
                Company
              </li>
              {/* <li>
                <a href="#pablo">Minchia</a>
              </li> */}
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://www.biotecnomed.it/">
              Naditemm
            </a>
            
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
