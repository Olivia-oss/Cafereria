import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import '../product.css'


export default function CardProduct({product, setCart}) {

    //Cantidad de productos
    const [amount, setAmount] = useState(1);
    const [colorCart, setColorCart] = useState("#4B847D");


    
    //Boton Aumentar
    const handleMore = () => {
        setAmount(amount+1)
        setColorCart("#4B847D");
    }
   
    //Boton disminuir
    const handleLess = () =>{
        if(amount > 1){
            setAmount(amount-1)
        }
        setColorCart("#4B847D");
    }

    //Añadir al carrito
    const handleCar = () => {
        const cart = {
            "id": product._id,
            "title":product.title,
            "price":product.price,
            "img":product.img,
            "amount":amount
        }
        setAmount(1);
        setColorCart("#37cc64")
        

        
        setCart(cart, amount)



    }

  
  return (
    <> 
        <Card style={{ width: '12rem', height: '18rem'}} className="m-3 simple-linear border-0 cardSelt">
          
        <Card.Img style={{ width:'180px', height:"180px"}} variant="top" src={product.image} />
        <Card.Body>
            <Row  >
                <Col >
                    <p className='fw-bold text-sm-start m-0'>{product.title}</p>
                    <p className='text-sm-start m-0' style={{marginTop:"-10px", fontSize:"15px"}}>${product.price}</p>
                
                    <div className='d-flex flex-row bd-highlight my-1'>
                        <span className='my-1' onClick={handleLess}>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#4B847D" class="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </span>
                        <p className='mx-2 mt-1 fw-bold ' style={{color:"#666"}}>{amount}</p>
                    
                        <span className='my-1'  onClick={handleMore}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#4B847D" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                        </span>
                    </div>
                      
                </Col>

                <Col className='"m-0 row  align-items-center' >
                    <span onClick={handleCar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={colorCart} class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                        </svg>
                     
                    </span>
                    
                </Col>
            </Row>
        </Card.Body>
    </Card>

    </>
  )
}
