import React from 'react';

import { Navbar,  Button} from "react-bootstrap";



export default function Header(){

    return (
        <Navbar>
        <Navbar.Brand href="#home"><img src="http://www.kuepa.com/COV2/assets/img/logo.png" alt="kuepa"/>
        </Navbar.Brand>
        <Button variant="link" >
          Log Out
        </Button>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">armand</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>  
    )
  }

