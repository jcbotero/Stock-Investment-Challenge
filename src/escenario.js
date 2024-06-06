
import './App.css';
import { useState, useEffect } from 'react'
import { data, dataEn } from './Noticias';



 export default function Escenario1 ({props, idioma})  {
   
 

  const [number, setNumber] = useState({one: "", two: "", three: "", four: "", five: "", six: "", seven: "", eigth: "", nine: "2000", ten: "30000", eleven: "4000", twelve: "40000", thirteen: "100000000", catorce: " ", quince: " ", dieciseis: " ", diecisiete: "" , dieciocho:"", diecinueve: "", veinte:"", veinteuno: "", veintedos: " " }) // el hook es suma ... y lo que hay dentro de usestate es el objeto que contiene ese hook
  
 
  const  precios = () => {
     props.nine(number.nine)
  }

  const [noticias, setNoticias] = useState(data[0])
  const [subTitulo1, setSubtitulo1] = useState("INFORMACIÓN ACTUAL")
  const [subTitulo2,  setSubtitulo2] = useState("Fase del ciclo económico :")
  const [subTitulo3,setSubtitulo3] = useState("Noticia general")
  const [subTitulo4,setSubtitulo4] = useState("Noticias empresariales")
  const [acciones,setAcciones] = useState("PRECIOS ACCIONES")

  useEffect(()=>{
    if ( idioma == "español") {
      setNoticias(data[0])
    }  else {
       setNoticias(dataEn[0])
      setSubtitulo1("CURRENT INFORMATION")
      setSubtitulo2("Phase of the economic cycle:")
      setSubtitulo3("General news:")
      setSubtitulo4("Company news:")
      setAcciones("STOCK PRICES")
      }
  }) // useeffect para definir el idiomar, si el usuario da click a la bandera español, el prop idioma es igual a español y se utliza la data[0], si da ingles se utiliza la dataEn[0]



  return (
    <div>
      <section className='noticias'>
                <h2>{subTitulo1} </h2>
                <h3><span>{subTitulo2}</span><br></br></h3>
                <h3 className='general'>{"-" + " " + noticias.general}</h3>
                <h4><span>{subTitulo3}</span><br></br></h4>
                <h4 className='general'>{"-" + " " + noticias.grupales}</h4>
                <h4 className='empresa'>{subTitulo4}</h4>
                <p>{"-" + " " + noticias.eco}</p>
                <p>{"-" + " " + noticias.banco}</p>
                <p>{"-" + " " + noticias.cemargos}</p>
                <p>{"-" + " " + noticias.nutresa}</p>
        </section>
        <h3 className='preacci'>{acciones}</h3>
        <section className='pprecios'>
              <div className='preciosa'>
                <p>Ecopetrol : </p>
                 <input value={number.nine}  name="nine" ></input>
              </div>
              <div className='preciosa'>
                <p>Bancolombia : </p>
                <input  value={number.ten} name="ten" readOnly></input>
              </div>
              <div className='preciosa'>
                 <p>Cementos Argos : </p>
                 <input  name="eleven" value={number.eleven} ></input>
              </div>
              <div className='preciosa'>
                  <p>Grupo Nutresa : </p>
                  <input  name="twelve" value={number.twelve} readOnly></input>
              </div>
        </section> 
    </div>
  );

}

