import './App.css';
import Footer from './Componentes/Footer';
import GestionProducts from './Componentes/GestionProducts';
import GetProducts from './Componentes/GetProducts';
import Header from './Componentes/Header';
import Temas from './Componentes/Temas'
import Ticket from './Componentes/Ticket';
import React, {useState} from 'react'



function App() {
  

  const [tema,setTema]=useState();
  const [auxiliar,setAuxiliar]=useState(false);
  const cambioPagina = (opcion)=>{
        setTema(opcion+"")
        setAuxiliar(!auxiliar)
        console.log(tema)
  }
  return (
    <div className='App '>
       <Header cambioPagina={cambioPagina}/>
      <div >
    
      <Temas tema = {tema}> </Temas>
      
      </div>
      <Footer/>
    
    </div>
  );
}

export default App;
