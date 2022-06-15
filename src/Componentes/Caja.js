import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import {Spinner} from "reactstrap";
import { useQuery,gql} from "@apollo/client";
import {format} from 'date-fns';


const GET_VENTAS = gql`
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


function Caja() {

  const [value, onChange] = useState(new Date());
  var fecha = format(value, 'd/M/yyyy');
  const {error, data,loading}= useQuery(GET_VENTAS);
  console.log(fecha);
  var date;
  var dateFinal;

  if (loading) return <div><div className="m-0 vh-100 row justify-content-center align-items-center">
  <div className="col-auto p-5">
     <Spinner animation="grow" />
  </div>
</div></div>;

  if(error) return <div> <div className="m-0 vh-100 row justify-content-center align-items-center">
  <img  style={{width:"400px", height:"400px"}} src="https://stories.freepiklabs.com/storage/26838/oops-404-error-with-a-broken-robot-pana-2854.png" alt="" />
</div></div>;
  
  return (
    <div className='m-0 vh-100 row justify-content-center align-items-center'>
      <div className="container d-flex justify-content-center" style={{marginTop:'30px'}}>
      <Calendar onChange={onChange} value={value} />
      </div>
        {
          <div className="container d-flex justify-content-center" style={{marginTop:'20px'}}> 
          <table  class="table table-bordered table-light" id='table'>
          <thead >
              <tr>
              <th  style={{backgroundColor:'#4B847D'}}>#Orden</th>
              <th  style={{backgroundColor:'#4B847D'}}>Descripcion</th>
              <th  style={{backgroundColor:'#4B847D'}}>Total</th>
              </tr>
          </thead>
          <tbody>
             {data.sales.map(venta => {
                date =  new Date(venta.createdAt)
                dateFinal= format(date, 'd/M/yyyy');
                console.log(dateFinal)
                 return(
                  dateFinal===fecha? ( 
                     <tr>
                          <td>{venta.numSale}</td>
                          <td>{venta.description}</td>
                          <td>{venta.total}</td>
                     </tr>
                     
                 ):(null)
                 )
             }) 
  
             }
              
          </tbody>
      </table>
      </div>

        }
      
    </div>
  );
}

export default Caja;