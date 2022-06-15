import React, { useState } from 'react'
import { useQuery,gql} from "@apollo/client";
import { Spinner, Modal, Card, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import CardProduct from "./CardProduct";
import '../product.css'
import PayPaypal from './PayPaypal';
import Ticket from './Ticket';


function GetProducts (){

  const GET_PRODUCTS = gql` 
    query {
        products {_id
      title
      description
      price
      image}
    }
    `;

    function random(min, max) {
      return Math.floor((Math.random() * (max - min + 1)) + min);
  }

    
    const [listCart, setListCart] = useState([])
    const [sale, setSale] = useState({
      "numSale":random(100,999),
      "description":"",
      "note":" ",
      "total":0,
      "state":"activo"
    })
    

    
  
    //Datos de productos 
    const {error, data,loading}= useQuery(GET_PRODUCTS);
    //Datos de los productos añadidos al carrito
  //  const {errorCart, dataCart,loadingCart}= useQuery(GET_CART);

    
    //Modal carrito
    const [show, setShow] = useState(false);
    const handleClose = () => {
      setShow(false);
      if(listCart.length === 0){
        window.location.reload()
      }
    }

    const [paid, setpaid] = useState(false)
    const handleShow = () => {


      setShow(true);
      getPay()
    }
    


    const [auxiliar, setAuxiliar] = useState(false)

    const [pay, setPay] = useState(0)

    const getTotal = (amount, price)=>{
      return amount * price;
    }
    



    //Boton Aumentar
    const handleMore = (id) => {
      const auxCart = listCart;

      auxCart.map(item => {
        if(item.id === id){
          item.amount = item.amount +1;
        }
      })
      setListCart(
        auxCart
      )
      getPay()
      setAuxiliar(!auxiliar)
    

     
    }
 
    //Boton disminuir
    const handleLess = (id) =>{
       // dataCartPrueba.filter(item =>item.id === id).amount - 1

       const auxCart = listCart;

        auxCart.map(item => {
          if(item.id === id){
           if(item.amount > 1){
            item.amount = item.amount -1;
           }
          }
        })
      setListCart(
        auxCart
      )
      getPay()
      setAuxiliar(!auxiliar)

       
         
    }
    

    //Item carrito
    const setCart = (cart, amount) => {

      if(listCart.filter(item => item.id === cart.id).length === 0 ){
        setListCart([...listCart,cart]);
      }else{
        listCart.map(item => {
          if(item.id === cart.id){
            item.amount += amount  
        }
        }
        
        )
        setListCart(listCart)
        setAuxiliar(!auxiliar)

      
      }
      
    }

    //Borran item de carrito
    const handleDeleteItemCart = (id) => {
      setListCart(
        listCart.filter(item => item.id != id)
      )
      getPay()
    }

    const deleteCarrito = () => {
      setListCart([])
      setpaid(false)
    }

    const paidOut = () => {
      setpaid(true)
      setAuxiliar(!auxiliar)
      console.log("Pagado");
    } 

 


    //Total a pagar
    const getPay = () => {
      let total = 0;
   
      
      let description = "";

      listCart.forEach(item => {
    
        total += parseInt(item.price) * item.amount
  
        if(item.amount < 2){
          description +=" "+ item.amount+" orden de "+item.title
        }else{
          description +=" "+ item.amount+" ordenes de "+item.title
        }
      })
      setPay(total)
      setSale({
        ...sale, "total":total, "description":description
      })

      setAuxiliar(!auxiliar)
    
    }


 
    //Crear orden
    const handleSale = (e) => {
      setSale({
        ...sale,
        [e.target.name] : e.target.value
    })

   
    }
  

  

    return (
      <div style={{ backgroundColor : "#fff" }}>
        {loading ? (
         <div className="m-0 vh-100 row justify-content-center align-items-center">
           <div className="col-auto p-5">
              <Spinner animation="grow" />
           </div>
         </div>

        ): (
          error ? (
            <div className="m-0 vh-100 row justify-content-center align-items-center">
              
              <img  style={{width:"400px", height:"400px"}} src="https://stories.freepiklabs.com/storage/26838/oops-404-error-with-a-broken-robot-pana-2854.png" alt="" />
            </div>
          ):(
           
            <div>
               
              <div className="d-flex flex-row-reverse m-3 ">
              {listCart.length >0?(
                  <div className='rounded-circle' style={{backgroundColor:"#cc0000", width:"15px", height:"15px", color:"#fff", marginTop:"-10px", fontSize:"9px "}}>
                    {listCart.length}
                  </div>
                  ):(
                    <div></div>
                  )}
                
                <span onClick={handleShow} >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#4B847D" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                
                </span>
               
              </div>
          
              <div  className="m-0 vh-100 conteiner conteiner_grid" >
                { console.log(data)}
                  {data.products.map((producto) => {
                   
                   
                    return (
                     
                      <CardProduct product = {producto} setCart = {setCart} key={producto._id} />
                      
                    );
                  })}
              </div>
             
            
            </div>
            
           
          )
        )}



       {/* Realizacion de la compra  */}

      <Modal show={show} onHide={handleClose}  > 
          
          {
          listCart.length > 0 ?(
            <div>
              {
                paid ? (
                  <div className="d-grid gap-2">
                    <Ticket sale =  {sale} listCart = {listCart}/>
                    <Button  className='m-2 '  size="lg" variant="dark" onClick={deleteCarrito} >Realizar otra compra</Button>
                  </div>
                  
                  
                ):(
                  <div>
                    {
                      listCart.map(item => {
                        return(
                          <Card  className='d-flex flex-row m-4  '>
                            <Card.Img style = {{width:"150px"}} variant="top" src="https://vips.com.mx/img/2019/platillosdic/tacos-dorados-pollo.png" />
                            <Card.Body>
                              <Card.Title>{item.title}</Card.Title>
                              <Card.Text>
                               {item.description}
                              </Card.Text>
                              <Card.Text className='fw-bold'>
                               ${item.price}
                              </Card.Text>
                              <div className='d-flex justify-content-between'>
                              <div className='d-flex flex-row bd-highlight my-1'>
                                    {/* <span className='my-1' onClick={() => handleLess(item.id)} >
                                        <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4B847D" class="bi bi-dash-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                        </svg>
                                    </span> */}
                                    {item.amount === 1 ? (
                                       <p className='mt-1 fw-bold ' style={{color:"#666"}}>{item.amount}  Orden </p>
                                    ):(
                                      <p className='mt-1 fw-bold ' style={{color:"#666"}}>{item.amount}  Ordenes</p>
                                    ) }
                                   
                                
                                    {/* <span className='my-1' onClick={() => handleMore(item.id)}  >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4B847D" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                        </svg>
                                    </span> */}
                                </div>
                              <div>
                                <label className='me-2 fw-bold my-2'>Total: </label>
                                <label>{getTotal(item.amount, item.price)}</label>
                              </div>
                            
                              </div>
                              {/* <p className='fw-bold'>Notas</p>
                              <Form.Control as="textarea" placeholder="Expecificaciones del platillo" name="note" onChange={handleSale} /> */}
                            </Card.Body>
                            <span className='m-2'   onClick={() => handleDeleteItemCart(item.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#517c77" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                            </span>
                          </Card>
                        )
                      })
                    }
                    <div className='m-2'>
                      <div>
                        <p class="fs-2">Total: ${pay}</p>
                      </div>
                      <PayPaypal sale= {sale} paidOut = {paidOut} />
                    </div>
                  </div>
                )
              }

              

            </div>

            
          ):(
            <div className='d-flex justify-content-center p-4'>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              <p className='fw-bold m-4'>Agrega productos al carrito</p>
              </span>
            </div>
          )
            
          } 
        
        </Modal>
   
      </div>

    );
   
}

export default GetProducts;