import { useState,useEffect } from "react"
import Error from "./Error"


const Form = ({pacientes, setPacientes,paciente,setPaciente}) => {
  
  const [nombre,setNombre]=useState('');
  const [apellido,setApellido]=useState('');
  const [correo,setCorreo]=useState('');
  const [fcita,setFcita]=useState('');
  const [sintomas,setSintomas]=useState('');

  const [error,setError]=useState(false);

  useEffect(() => {

  if(Object.keys(paciente).length>0){
    console.log(paciente)
    setNombre(paciente.nombre)
    setApellido(paciente.apellido)
    setCorreo(paciente.correo)
    setFcita(paciente.fcita)
    setSintomas(paciente.sintomas)
  }

  },[paciente]);



const generarId=()=>{

    const  random=Math.random().toString(36).substring(2);
    const fecha=Date.now().toString(36);
    return random + fecha;
}


  const handleSubmit=(e)=>{
    e.preventDefault();
    if([nombre,apellido,correo,fcita,sintomas].includes('')){

      console.log("Hay al menos un campo vacio");
      setError(true);
      return;
    }
      //console.log("Todos llenos");
      setError(false);
   //Creando objeto
      const objetoPaciente={
      nombre,
      apellido,
      correo,
      fcita,
      sintomas,
     // id: generarId()
    }

    if(paciente.id){
      //Editando registro

       objetoPaciente.id = paciente.id
       const pacientesActualizados=pacientes.map(pacienteState=>pacienteState.id === paciente.id ? objetoPaciente:pacienteState) 
        setPacientes(pacientesActualizados)
        setPaciente({})

    } else{
      //nuevo registro
      objetoPaciente.id=generarId();
      setPacientes([...pacientes,objetoPaciente]);//usando deestructuración de un objeto 

    }

    
    //reiniciar el formulario   
    setNombre('');
    setApellido('');
    setCorreo('');
    setFcita('');
    setSintomas('');
    setError(false);

  }


//// Me quede por validar  error...

  return (  
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center" >Seguimiento Pacientes</h2>
    
    <p className="text-lg mt-5 text-center mb-10" >
    Añade Pacientes y {''}
    <span className="text-indigo-600 font-bold ">Administralos</span>
    </p>
   
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
      <div className="mb-5">
      
      {error && <Error><p>Todos los campos son obligatorios</p></Error> } 
      
        <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombres Paciente: </label>
        
        
      
        <input
          id="nombre"  
          type="text"
          placeholder="Nombre del paciente"
          className="border-2 w-full p-2 mt-2 placeholder-blue-800 rounded-md"
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
        />
      </div>
      
      <div className="mb-5">
        <label htmlFor="apellido" className="block text-gray-700 uppercase font-bold">Apellidos Paciente: </label>
        <input
          id="apellido"  
          type="text"
          placeholder="Apellido del paciente"
          className="border-2 w-full p-2 mt-2 placeholder-blue-800 rounded-md"
          value={apellido}
          onChange={(e)=>setApellido(e.target.value)}
       
       />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo electrónico de Paciente: </label>
        <input
          id="email"  
          type="email"
          placeholder="Correo electrónico del paciente"
          className="border-2 w-full p-2 mt-2 placeholder-blue-800 rounded-md"
          value={correo}
          onChange={(e)=>setCorreo(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="cita" className="block text-gray-700 uppercase font-bold">Fecha de cita: </label>
        <input
          id="cita"  
          type="date"
          className="border-2 w-full p-2 mt-2" 
          value={fcita}
          onChange={(e)=>setFcita(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas </label>
        <textarea   id="sintomas"
         placeholder="Describe los sintomas"
         className="border-2 w-full p-2 mt-2 placeholder-blue-800 rounded-md"
         value={sintomas}
         onChange={(e)=>setSintomas(e.target.value)}
        />
      </div>
      <input
      type="submit"
      className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
      value={paciente.id ? 'Editar paciente':'Agregar Paciente'}
      />

    </form>

    </div>
  )
}

export default Form
