import React from "react";
import Caja from "./Caja";
import GestionProducts from "./GestionProducts";
import GetProducts from "./GetProducts";
import GetVentas from "./GetVentas";
import Inicio from "./Inicio";
import Register from "./Register";
import Login from "./Login"
import GestionTrabajadores from "./GestionTrabajadores";


export default function Temas({tema}) {

    const project = () => {
        switch(tema) {
  
          case "1":   return <Caja/>;
          case "2":   return <GetProducts/>; //OLI
          case "3":   return <GetVentas/>;
          case "4":   return <GestionTrabajadores/>; //LIS
          case "5":   return <GestionProducts/>; //OLI
          case "7":   return <Register/>; //OLI
          case "6":   return <Login/>; //OLI
          case "8": {
            localStorage.setItem('cuenta',"undefined") 
            window.location.reload()
            
          } 
          
        
          default: return <Inicio/>
        }
    }

    return (
        <div>
            <div>{ project() }</div>   
        </div>
    )
}