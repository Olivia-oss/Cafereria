
import React, {useState} from 'react'
import {Table, Row, Col, FormControl, InputGroup, Button, Spinner , Modal, Form} from 'react-bootstrap'
import { useQuery,gql} from "@apollo/client";

function GestionProducts() {
    const GET_USERS = gql` 
    query {
        users {_id
    email
    token
    username
    cuenta}
    }
    `;

    const {error, data,loading}= useQuery(GET_USERS);
    console.log(data);
  return (
    <div className=" vh-100 container d-flex justify-content-center mt-3">
    {loading ? (
         <div className="m-0 vh-100 row justify-content-center align-items-center">

         </div>
        ): (
        error ?(
            <div className="m-0 vh-100 row justify-content-center align-items-center">
            
          </div>
        ):(
            <Table striped bordered hover>
            <thead>
                <tr>
               
                <th>ID</th>
                <th>Nombre de usuario</th>
                <th>Correo</th>
                <th>Tipo</th>
                
                </tr>
            </thead>
            <tbody>
             {data.users.map(usuario => {
                
                console.log(usuario.cuenta)
                 return(
                  usuario.cuenta !== 'cliente'? ( 
                     <tr>
                          <td>{usuario._id}</td>
                          <td>{usuario.username}</td>
                          <td>{usuario.email}</td>
                          <td>{usuario.cuenta}</td>
                     </tr>
                     
                 ):(null)
                 )
             }) 
  
             }
              
          </tbody>
        </Table>
        ))
        
    }
    </div>
  )
}

export default GestionProducts;