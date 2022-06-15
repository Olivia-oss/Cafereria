import React from 'react'
//import { Card, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../product.css'


function Footer(){

    return(
        <div className='container-fluid' style={{margin:0}}>            
            <footer className='text-center text-lg-start text-muted' style={{backgroundColor:'#4B847D'}}>
                <section class="border-bottom">
                    <div style={{color:'white', fontSize:'20px', padding:'10px'}}>
                            CAFETEC
                    </div>
                </section>
                <section class="">
                    <div style={{textAlign:'center', color:'white', padding:'10px'}}>                                                               
                        <h6 class="text-uppercase fw-bold ">
                            Dirección
                        </h6>
                        <p>Av. José Francisco Ruíz Massieu No. 5, Colonia Villa Moderna, interior del Tecnológico, C.P. 39090 Chilpancingo, Guerrero.</p>
                        <h6 class="text-uppercase fw-bold">
                            Contacto
                        </h6>                        
                        <p>(747) 47 2 1014 <br/>
                        (747) 47 2 7152</p>                                                                                     
                    </div>
                </section>
                <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)", color:'white'}}>
                    © Copyright 2022 All Rights Reserved - Developed by Sdeveloper                    
                </div>
            </footer>
        </div>
            
        
    );

}

export default Footer;