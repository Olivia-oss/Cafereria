
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { Navbar, Container,Nav,NavDropdown} from 'react-bootstrap';
import '../App.css';


function Header ({cambioPagina}){

    const cuentaId = localStorage.getItem('cuenta');
    console.log(cuentaId);
    

    const [cuenta, setcuenta] = useState(cuentaId);
    
  

    return(

       <div>
        {cuenta === "undefined"?(
            
            <Navbar  expand="lg" className='menu' >
            <Container>
              <Navbar.Brand href="#home"><a class="navbar-brand" style={{color: '#fff'}} href="#">
                    <img src="coffe.png" width="40" height="40" alt=""/>
                    Cafeteria</a></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home" onClick= {() => cambioPagina(6)} >Inicio Sesion</Nav.Link>
                  <Nav.Link href="#link" onClick= {() => cambioPagina(7)}>Registrarse</Nav.Link>
                 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        ):(
            cuenta === "empleado"?(
             
                <Navbar  expand="lg" className='menu' >
                <Container>
                  <Navbar.Brand href="#home"><a class="navbar-brand" style={{color: '#fff'}} href="#">
                        <img src="coffe.png" width="40" height="40" alt=""/>
                        Cafeteria</a></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#link" onClick= {() => cambioPagina(1)}>Corte de caja</Nav.Link>
                        <Nav.Link href="#home" onClick= {() => cambioPagina(2)} >Gestion Ventas</Nav.Link>
                        <Nav.Link href="#home" onClick= {() => cambioPagina(3)} >Pedidos</Nav.Link>
                        <Nav.Link href="#home" onClick= {() => cambioPagina(4)} >Gestion Empleados</Nav.Link>
                        <Nav.Link href="#home" onClick= {() => cambioPagina(5)} >Gestion Productos</Nav.Link>   
                        <Nav.Link href="#home" onClick= {() => cambioPagina(8)} >Cerrar Sesion</Nav.Link>
                     
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            ):(
                <Navbar  expand="lg" className='menu' >
                <Container>
                  <Navbar.Brand href="#home"><a class="navbar-brand" style={{color: '#fff'}} href="#">
                        <img src="coffe.png" width="40" height="40" alt=""/>
                        Cafeteria</a></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                   
                        <Nav.Link href="#home" onClick= {() => cambioPagina(2)} >Gestion Ventas</Nav.Link>
                    
                        <Nav.Link href="#home" onClick= {() => cambioPagina(8)} >Cerrar Sesion</Nav.Link>
    
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            )

            
        )

        }
       </div>
            
        
    );

}

export default Header;