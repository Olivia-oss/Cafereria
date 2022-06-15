import React from "react";
import { Card,CardBody,Button} from "reactstrap";
import './card.css';
import Swal from 'sweetalert2';
import { gql,useMutation} from "@apollo/client";
import {GET_VENTAS } from './GetVentas';

const UPDATE = gql`
mutation updateSale($_id:String!,$state:String!){
  updateSale(_id:$_id,state:$state)
}
`;


function CardNota ({numOrder,description,id}){
    
  const [updateVenta]= useMutation(UPDATE,{
    refetchQueries:[{query: GET_VENTAS}]
  }
    );

  
  const handleTerminado = (_id) =>{

    Swal.fire({
        title: '¿Estas seguro?',
        text: "¡La orden debe estar terminada!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#4B847D',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si!'
      }).then((result) => {
        if (result.isConfirmed) {
          updateVenta({
            variables:{
              _id:_id,
              state:"inactivo",
            },
          });
          Swal.fire(
            '¡Orden terminada!',
            'Se eliminó de la vista',
            'success'
          )
        }
      })
};

    return(

        
<Card id="cartita" style={{ width: '300px' , height:'200px'}}>   
            <CardBody style={{backgroundColor:'#FEE4E7'}}>
                  <h3> Orden #  {numOrder}</h3>
                   <h5>{description}</h5>
               </CardBody>
                <Button onClick={()=>handleTerminado(id)} type="button" class="btn btn-light" style={{backgroundColor:  '#4B847D'} }><h5 style={{color:'white'}}>Terminado</h5></Button>
            </Card>
    );
}

export default CardNota;