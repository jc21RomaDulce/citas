import {useState,useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Customers from './components/customers';
function App() {
  
const INITIAL=JSON.parse(localStorage.getItem('pacientes'))??[];
const [pacientes,setPacientes]=useState(INITIAL);
const [paciente,setPaciente]=useState({});

/*useEffect(() => {
  const obtenerLS=()=>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
     setPacientes(pacientesLS);
    console.log(pacientesLS);
}
  obtenerLS();
  console.log('si esta actualizando')
},[]);
*/

useEffect(()=>{

//console.log('Çomponente listo o cambio paciente')
localStorage.setItem('pacientes',JSON.stringify(pacientes));
},[pacientes])



const eliminarPaciente=id=>{

    //console.log('Eliminando paciente..',id)
    const pacientesActualizados=pacientes.filter(paciente=>paciente.id!==id);
    setPacientes(pacientesActualizados);
}


  return (
  <div className="container mx-auto mt-20">
    <Header
   
    />
    
    <div className="m-12 md:flex">
      <Form
     pacientes={pacientes} 
     setPacientes={setPacientes}
     paciente={paciente}
     setPaciente={setPaciente}
      />
      <Customers
      pacien={pacientes}
      setPaciente={setPaciente}
       eliminarPaciente={eliminarPaciente}
      />
    </div>
  </div>
  )
}

export default App
