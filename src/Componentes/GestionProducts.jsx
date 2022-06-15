
import React, {useState} from 'react'
import {Table, Row, Col, FormControl, InputGroup, Button, Spinner , Modal, Form} from 'react-bootstrap'
import { useQuery,gql, useMutation} from "@apollo/client";

function GestionProducts() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showUpdate, setShowUpdate] = useState(false);
    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);
    
    const [searh, setSearh] = useState("");

    const [product, setProduct] = useState({
        title:"",
        description:"",
        price:"",
        image:""
    });
    const [productUp, setproductUp] = useState({
        "id":"",
        "price":0
    })

  
   

    
    const GET_PRODUCTS = gql` 
    query {
        products {_id
    title
    description
    price
    image}
    }
    `;

    const CREATE_PRODUCT = gql`
    mutation createProduct( $title: String!, $price: String!, $description: String!, $image: String!){
        createProduct(product: {
            title: $title,
            description: $description,
            price: $price,
            image: $image
        }){
          _id,
          title,
          description,
          price,
          image  
        }
      }
    `;

    const UPDATE_PRODUCT = gql`
    mutation updateProduct($id: String!, $price: String!){
        updateProduct(
            _id:$id,
            price:$price
        )
    }
    `;

    const DELETE_PRODUCT = gql`
    mutation deleteProduct($id: String!){
        deleteProduct(_id: $id)
      }
    `;

    

    const {error, data,loading}= useQuery(GET_PRODUCTS);

    const handleForm = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    
    //Crear producto
     const [createProduct] = useMutation(CREATE_PRODUCT);
     const handleSave = () => {

       
        const {title,description,price,image} = product;
        if(title != "" && description != "" && price != "" && image != "" ){
            createProduct({variables: {title, description, price, image}})
            handleClose()
            window.location.reload();
        }
        
        
    }   


    //Actualizar datos
    const handleOpenModalIpdate = (id, price) =>{
        setproductUp(
           {
            "id":id,
            "price":parseInt(price)
           }
        )
        handleShowUpdate();
    }

    const handleChangeUpdate = (e) =>{
        setproductUp({
            ...productUp,
            [e.target.name] : e.target.value
        })
    }

    const [updateProduct ] = useMutation(UPDATE_PRODUCT);
    const handleUpdate = () => {
        const {id,price} = productUp;
        updateProduct({variables: {id,price}});
        handleCloseUpdate()
        window.location.reload(); 
    }



    //Eliminar producto
    const [deleteProduct] = useMutation(DELETE_PRODUCT);
    const handleDeleteProduct = (id) => {

        deleteProduct({variables: {id}})
        window.location.reload(); 
    }

    //Buscador

    const handleSearh = (e) => {
        setSearh(e.target.value)
    }



  return (
    <div className='mx-4 '>
        <Row >
        <Col sm={8}> 
           
                <InputGroup className=" my-4">
                    <FormControl
                        className='shadow pl-5'
                        placeholder="Buscar por titulo"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={handleSearh}
                        
                    />

                    
                
                    <Button className="btn b-0 shadow "  style={{ background:"#4B847D", color:"#fff", borderColor:"#4B847D"}} type="button">Buscar</Button>        
                </InputGroup>
        </Col>
        <Col sm={4} className="d-flex flex-row-reverse align-items-center">
        <span  onClick={handleShow} className=' mx-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4B847D" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
        </span>
        </Col>
    </Row>
    {loading ? (
         <div className="m-0 vh-100 row justify-content-center align-items-center">
           <div className="col-auto p-5">
              <Spinner animation="grow" />
           </div>
         </div>
        ): (
        error ?(
            <div className="m-0 vh-100 row justify-content-center align-items-center">
            <img  style={{width:"400px", height:"400px"}} src="https://stories.freepiklabs.com/storage/26838/oops-404-error-with-a-broken-robot-pana-2854.png" alt="" />
          </div>
        ):(
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Imagen</th>
                <th>Titulo</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Acciones</th>
                
                
                </tr>
            </thead>
            <tbody>
            {console.log(data)}
               {data.products.map(product => {
               
                   return(
                    
                        product.title.search(searh) != -1 ?(
                            <tr>
                            <td>{product._id}</td>
                            <td><img src={product.image} alt="" style={{ width:'180px', height:"180px"}} /></td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>
                                <span className='m-2' onClick={() => handleDeleteProduct(product._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#517c77" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                                </span>
                                <span className='m-2'  onClick={() => handleOpenModalIpdate(product._id, product.price)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#517c77" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                </svg>
                                </span> 
                            </td>
                            
                       </tr>
                    
                        ):(
                            <div></div>
                        )
                       
                   )
               }) 
    
               }
                
            </tbody>
        </Table>
        ))
        
    }

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Agregar producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextTitle">
                        <Form.Label column sm="3">
                            Title
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" placeholder="tituto" name="title" onChange={handleForm} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextDescription">
                        <Form.Label column sm="3">
                            Descripcion
                        </Form.Label>
                        <Col sm="9" >
                            <Form.Control type="text" placeholder="descripcion" name="description" onChange={handleForm} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
                        <Form.Label column sm="3">
                            Precio
                        </Form.Label>
                        <Col sm="9" >
                            <Form.Control type="number" placeholder="Precio" name="price" onChange={handleForm} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
                        <Form.Label column sm="3">
                            Imagen
                        </Form.Label>
                        <Col sm="9" >
                            <Form.Control type="text" placeholder="URL de la imagen" name = "image" onChange={handleForm} required/>
                        </Col>
                        <img src="" alt="" srcset="" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="primary" style={{ background:"#4B847D", color:"#fff", borderColor:"#4B847D"}} onClick={handleSave}>
                Guardar
            </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={showUpdate} onHide={handleCloseUpdate}>
            <Modal.Header closeButton>
            <Modal.Title>Agregar producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextTitle">
                        <Form.Label column sm="3">
                            ID
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" placeholder="tituto" value={productUp.id} name="title"  disabled />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPrice">
                        <Form.Label column sm="3">
                            Precio
                        </Form.Label>
                        <Col sm="9" >
                            <Form.Control type="number" placeholder="Precio" name="price" vallue={productUp.price} onChange={handleChangeUpdate} required />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={handleCloseUpdate}>
                Cerrar
            </Button>
            <Button variant="primary" style={{ background:"#4B847D", color:"#fff", borderColor:"#4B847D"}} onClick={handleUpdate}>
                Guardar
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default GestionProducts;