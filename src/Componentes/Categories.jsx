import React from 'react'
//import { Card, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../product.css'


function Categories(){

    return(
        <div className='container'>            
            <h1 style={{ margin:'20px', color:'#4B847D' }}>Categorías</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4"> 
                <div className="col" onClick={() => alert("Hola")}>
                    <div className="card h-100" style={{borderRadius:'40px'}}>
                        <img alt='' src={"img/cate/antojitos.jpg"} className="card-img-top " height="300" style={{borderTopRightRadius:'40px', borderTopLeftRadius:'40px'}}/> 
                        <div className="card-body">                                    
                            <center><h3 className="card-title" style={{ color:'#4B847D' }}>Antojitos</h3></center>                                                                                            
                        </div>
                    </div>
                </div>
                <div className="col" onClick={() => alert("Hola")}>
                    <div className="card h-100" style={{borderRadius:'40px'}}>
                        <img alt='' src={"img/cate/comida.jpg"} className="card-img-top" height="300" style={{borderTopRightRadius:'40px', borderTopLeftRadius:'40px'}}/> 
                        <div className="card-body">                                    
                            <center><h3 className="card-title" style={{ color:'#4B847D' }}>Comidas del día</h3></center>                                                                                            
                        </div>
                    </div>
                </div>
                <div className="col" onClick={() => alert("Hola")}>
                    <div className="card h-100" style={{borderRadius:'40px'}}>
                        <img alt='' src={"img/cate/torta.jpg"} className="card-img-top" height="300" style={{borderTopRightRadius:'40px', borderTopLeftRadius:'40px'}}/> 
                        <div className="card-body">                                    
                            <center><h3 className="card-title" style={{ color:'#4B847D' }}>Tortas</h3></center>                                                                                            
                        </div>
                    </div>
                </div>
                <div className="col" onClick={() => alert("Hola")}>
                    <div className="card h-100" style={{borderRadius:'40px'}}>
                        <img alt='' src={"img/cate/drinks.jpg"} className="card-img-top" height="300" style={{borderTopRightRadius:'40px', borderTopLeftRadius:'40px'}}/> 
                        <div className="card-body">                                    
                            <center><h3 className="card-title" style={{ color:'#4B847D' }}>Bebidas</h3></center>                                                                                            
                        </div>
                    </div>
                </div>
                <br/>
            </div>
            <br/>
           

            {/*<Row xs={1} md={4} className="g-1">
                <Col>
                    <Card  style={{ width: '150px', height:'200px'}}>
                    
                        <Card.Img variant="top" src="img/cate/antojitos.jpg" style={{ height:'120px' }}/>
                        <Card.Body>
                            <Card.Title>Antojitos</Card.Title>                    
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '150px' }}>
                    
                        <Card.Img variant="top" src="img/cate/comida.jpg" style={{ height:'120px' }}/>
                        <Card.Body>
                            <Card.Title>Comida del día</Card.Title>                    
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '150px', height:'200px' }}>
                    
                        <Card.Img variant="top" src="img/cate/torta.jpg" style={{ height:'120px' }}/>
                        <Card.Body>
                            <Card.Title>Tortas</Card.Title>                    
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '150px', height:'200px' }}>
                    
                        <Card.Img variant="top" src="img/cate/bebidas.jpg" style={{ height:'120px' }}/>
                        <Card.Body>
                            <Card.Title>Bebidas</Card.Title>                    
                        </Card.Body>
                    </Card>
                </Col>
    </Row>*/}
        </div>
            
        
    );

}

export default Categories;