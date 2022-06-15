import React from 'react'
//import { Card, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../product.css'


function Inicio(){

    return(
        <div className='container'>
            <br />
            <br/>                  
            <img alt='' src={"portada.png"} className="card-img-top " width={'100%'}  style={{borderTopRightRadius:'40px', borderTopLeftRadius:'40px', borderBottomRightRadius:'40px', borderBottomLeftRadius:'40px'}}/> 
            <br />
            <br />
            <br />      
        </div>
            
        
    );

}

export default Inicio;