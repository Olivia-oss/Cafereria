import React, { useState } from "react";
import "../styles/nav.css";
import { useMutation, gql } from "@apollo/client";
import Form from "react-bootstrap/Form";
import { Container, Button, Alert, Image } from "react-bootstrap";
import { Token } from "graphql";


const LOGIN_USER = gql`
mutation login($email: String! $password: String!){
  login(
    email: $email
    password: $password
  ){
    _id
    email
    token
    username
    cuenta
    createdAt
  }
}
`

function Login() {

  const [variables,setVariables] = useState({
    email:'',
    password:'',
})

const [loginUser,{loading}] = useMutation(LOGIN_USER,{
  onCompleted(data){
    console.log(data);
 
      localStorage.setItem('cuenta',data.login.cuenta)
      window.location.reload()
  },onError(error){
      console.log(error);
  }
})

const submitLoginForm = e =>{
e.preventDefault()
console.log(variables)

loginUser({variables})
}



  return (
    <Container
      className="vh-100 rowcontainer d-flex justify-content-center mt-3 "
      id="content"
    >
      <div className="col-md-5">
        <Form className="form" onSubmit={submitLoginForm} >
          <div className="d-flex justify-content-center mt-3">
            <Form.Label>Ingrese a su cuenta</Form.Label>
          </div>
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

          <div className="d-flex justify-content-center mt-3">
            <Button className="btn" type="submit">
              Ingresar
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default Login;