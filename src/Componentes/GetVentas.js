import React from "react";
import { useQuery,gql} from "@apollo/client";
import CardNota from "./CardNota";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from "reactstrap";
import '../index.css';


export const GET_VENTAS = gql`
query {
  sales {_id
  numSale
  description
  note
  total
  state 
  createdAt}
}
`;

function GetVentas (){



    const {error, data,loading}= useQuery(GET_VENTAS);

    console.log({error,loading,data});

    if (loading) return <div className="m-0 vh-100 row justify-content-center align-items-center">
    <div className="col-auto p-5">
       <Spinner animation="grow" />
    </div>
  </div>

    if(error) return <div className="m-0 vh-100 row justify-content-center align-items-center">
    <img  style={{width:"400px", height:"400px"}} src="https://stories.freepiklabs.com/storage/26838/oops-404-error-with-a-broken-robot-pana-2854.png" alt="" />
  </div>

    return (
      <div className="container d-flex justify-content-center m-0 vh-100 row " style={{marginTop:'70px'}}> 
        <div className="row"> {
          data.sales.map(ventas => (
            ventas.state==='activo'? ( 
              <div className="col-md-4" style={{marginTop:'20px'}}>
            <CardNota numOrder={ventas.numSale}  description={ventas.description} id={ventas._id} estado={ventas.state}/>  
            </div>
            ) : (null)
                     
          ))
          
          }
        </div>
      </div>
          
    );
}

export default GetVentas;