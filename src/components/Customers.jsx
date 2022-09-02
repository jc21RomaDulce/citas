import Paciente from  './Paciente'
import { useEffect } from 'react';

const Customers = ({pacien,setPaciente,eliminarPaciente}) => {
  
//console.log(pacien && pacien.length ); //  console.log(pacientes
useEffect(() => {
   if(pacien.length>0) { 
    console.log("Nuevo paciente");
   }
},[pacien])

return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
    
    {pacien && pacien.length ? (
      <>
        <h2 className="font-black text-3xl text-center">LISTADO DE PACIENTES</h2> 
        <p className="text-xl mt-5 mb-10 text-center">
          Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>

        </p>

          {pacien.map(paciente=>(

        <Paciente
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
          ))}
      </>
    ) : (
     <>
      <h2 className="font-black text-3xl text-center">NO HAY PACIENTES</h2> 
        <p className="text-xl mt-5 mb-10 text-center">
          Comienza agregando pacientes {''}
        <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>

        </p>
        </>
      
      
      )}



    </div>
  )
}

export default Customers
