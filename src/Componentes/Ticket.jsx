import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Ticket ({sale, listCart}) {
    

    const getDate = () => {
        const tempoTranscurrido = Date.now();
        const hoy = new Date(tempoTranscurrido);
        return  hoy.toLocaleDateString();

    }

    const getHour = () => {
        const tempoTranscurrido = Date.now();
        const hoy = new Date(tempoTranscurrido);
        return  hoy.getHours() + ':' + hoy.getMinutes();
    } 

    const getPrice = (amount, price)=>{
        return amount * price;
      }

    const getTotalArticle = () => {
        let artitlesAmount = 0;
        listCart.forEach(element => {
            artitlesAmount += element.amount;
        });

        return artitlesAmount;
    }

    const getTotal = () => {
        let total = 0;
        listCart.forEach(item => {
    
            total += parseInt(item.price) * item.amount
            
          })
         return total;
    }

    return(
        <div className='container-fluid'>
            <br/>            
            <center>
                <div className='row row-centered pos'>
             
                    <div  >
                        <div className='' style={{backgroundColor:'white',  border:'1px solid' , borderColor:'black', padding:'15px'}}>
                            <br/>
                            <h1 style={{fontFamily: 'Brush Script MT', fontSize:'50px'}}>CafeTec</h1>
                            <h4>TICKET DE PAGO</h4>
                            <hr />
                            <p style={{fontSize: '12px', textAlign:'justify'}}>Av. José Francisco Ruíz Massieu No. 5, Colonia Villa Moderna, interior del Instituto Tecnológico, C.P. 39090 Chilpancingo, Guerrero.</p> 
                            <hr />
                            <div class="row col-12" style={{padding:'5px'}}>
                                <div class="col-6 p-0" style={{textAlign: 'left', color: '#000000;'}}>
                                    <strong> Orden: </strong>
                                </div>
                                <div class="col-6 p-0"  style={{textAlign: 'right', color: '#000000;'}}>
                                    <strong>#{sale.numSale}</strong>
                                </div>                        
                                <div class="col-6 p-0" style={{textAlign: 'left', color: '#000000;'}}>
                                    <strong> Fecha: </strong>
                                </div>
                                <div class="col-6 p-0"  style={{textAlign: 'right', color: '#000000;'}}>
                                    <strong>{getDate()}</strong>
                                </div>                                        
                                <div class="col-6 p-0" style={{textAlign: 'left', color: '#000000;'}}>
                                    <strong> Hora: </strong>
                                </div>
                                <div class="col-6 p-0"  style={{textAlign: 'right', color: '#000000;'}}>
                                    <strong>{getHour()}</strong>
                                </div>                                                
                            </div>
                            <hr/>
                            <div class="row col-12" style={{padding:'5px'}}>
                                <div class="col-2 p-0" style={{textAlign: 'left', color: '#000000;'}}>
                                    <strong>Cnt.</strong>
                                
                                </div>
                                <div class="col-6 p-0"  style={{textAlign: 'left', color: '#000000;'}}>
                                    <strong>Descripción</strong>
                                    
                                </div>                        
                                <div class="col-4 p-0" style={{textAlign: 'right', color: '#000000;'}}>
                                    <strong>Importe</strong>
                                    
                                </div>                                                       
                            </div>
                            {listCart.map(item => {
                                return(
                                    <div class="row col-12" style={{padding:'5px'}}>
                                    <div class="col-2 p-0" style={{textAlign: 'left', color: '#000000;'}}>
                                        {item.amount}
                                    </div>
                                    <div class="col-6 p-0"  style={{textAlign: 'left', color: '#000000;'}}>
                                        {item.title}
                                    </div>                        
                                    <div class="col-4 p-0" style={{textAlign: 'right', color: '#000000;'}}>
                                        {getPrice(item.amount, item.price)}
                                    </div>                                                       
                                </div>
                                )
                            })}
                          
                            <hr/>
                            <div class="row col-12" style={{padding:'5px'}}>                        
                                <div class="col-12 p-0"  style={{textAlign: 'center', color: '#000000;'}}>
                                    <strong> Articulos: {getTotalArticle()}</strong>
                                </div>                                                                                                    
                            </div>
                            <hr/>
                            
                            <div class="row col-12" style={{padding:'5px'}}>                        
                                <div class="col-12 p-0"  style={{textAlign: 'right', color: '#000000;'}}>
                                    Subtotal: {getTotal()}
                                    <br/>
                                    <strong style={{fontSize:'20px'}}> Total: {getTotal()}</strong>
                                </div>                                                                                                    
                            </div>
                            <hr/>                            
                            <p style={{fontSize: '12px', textAlign:'justify'}}>Para dudas o aclaraciones puede llamar a los siguientes telefonos: 
                                (747) 47 2 1014 o (747) 47 2 7152, o bien puede visitarnos en la siguiente dirección: Av. José Francisco Ruíz Massieu No. 5, 
                                Colonia Villa Moderna, interior del Instituto Tecnológico, C.P. 39090 Chilpancingo, Guerrero.
                                con un horario de atencion de Lun-Vie de 8:00am-7:00pm.
                            </p>                                
                            <p style={{fontFamily: 'sans-serif', fontSize: '20px'}}>¡Gracias por su compra!</p>
                            <hr/>
                            <div class="row col-12">
                                <div class="col-6 p-0" >                                        
                                </div>                                      
                                <div class="col-6 p-0"  style={{textAlign: 'right', fontSize: '8px'}}>
                                    Powered by Sdeveloper 2022.
                                </div>                                    
                            </div>
                        </div>
                    </div>
                
                </div>
            </center> 
            <br/>               
        </div>
    )
}

export default Ticket;