import React, { useState } from "react";
import "../styles/nav.css";

import {gql, useMutation } from "@apollo/client";

import Form from "react-bootstrap/Form";
import { Container, Button, Alert, Image } from "react-bootstrap";

const REGISTER_USER = gql`
mutation createUser(
  $username: String!
  $email: String!
  $password: String!
  $confirmPassword: String!
  $cuenta: String
) {
  createUser(
    user: {
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
      cuenta: $cuenta
    }
  ) {
    _id
    email
    token
    username
    createdAt
    cuenta
  }
}
`;

function Register(props) {
  const [variables,setVariables] = useState({
      email:'',
      username:'',
      password:'',
      confirmPassword:'',
      cuenta: null
  })

    const [registerUser,{loading}] = useMutation(REGISTER_USER,{
        update(_,res){
            
            localStorage.setItem('cuenta',"cliente")
            window.location.reload();
            console.log(res)
        },onError(error){
            console.log(error);
        }
    })

  const submitRegisterForm = e =>{
    e.preventDefault()
    console.log(variables)

    registerUser({variables})
  }
  return (
    <Container
      className="vh-100 container d-flex justify-content-center mt-3"
      id="content"
    >
      <div className="col-md-5">
        <Form className="form" onSubmit={submitRegisterForm}>
          <div className="d-flex justify-content-center mt-3">
            <Form.Label>Crea una nueva cuenta</Form.Label>
          </div>
          <Form.Group className="mt-2" id="contenedor">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              id="username"
              name="username"
              placeholder="Ingresa tu usuario"
              value ={variables.username}
              onChange = {e => setVariables({...variables, username:e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo electronico"
              value ={variables.email}
              onChange = {e => setVariables({...variables, email:e.target.value })}
            />
            {/*<Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text>*/}
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              value ={variables.password}
              onChange = {e => setVariables({...variables, password: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mt-2">
            <Form.Label>Confirma tu contraseña</Form.Label>
            <Form.Control
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirma tu contraseña"
              value ={variables.confirmPassword}
              onChange = {e => setVariables({...variables, confirmPassword: e.target.value })}
              
            />
          </Form.Group>
          <div className="d-flex justify-content-center mt-3">
            <Button className="btn" type="submit">
              Registrar
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Register;
