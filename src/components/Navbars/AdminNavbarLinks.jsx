import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {

  render() {

    const Notifiche = (
      <div>
        <i className="fa fa-commenting" />
        <i className="caret" />  
        {/* icona freccia */}
        <span className="notification">3</span>
        <p className="hidden-lg hidden-md">Notifiche</p>
        {/* nasconde in base allo schermo visualizzando notifications*/}
      </div>
    );
    
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Home</p>
          </NavItem>
          <NavDropdown
            eventKey={2}
            title={Notifiche}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Notifica 1</MenuItem>
            <MenuItem eventKey={2.2}>Notifica 2</MenuItem>
            <MenuItem eventKey={2.2}>.....!</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Cerca</p>
          </NavItem>
        </Nav>
        {/* pull Right sposta tutto a dex */}
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Account
          </NavItem>
          <NavDropdown
            eventKey={2}
            title="Opzioni"
            id="basic-nav-dropdown-right">
            <MenuItem eventKey={2.1}>Opzione 1</MenuItem>
            <MenuItem eventKey={2.2}>Opzione 2</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>Opzione Separata</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            Esci
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
