
import './App.css';
import { useState, useEffect, useRef } from 'react'
import React from 'react';



export default function Resultado({setSubmittedText, sumatoria, dispo, portafo, idioma }) {


   const [ portafolio , setPortafolio] = useState();

   const [ score1, setEcore1] = useState(); // creo estos hooks para poder almacenarlos y renderizarlos en la tabla de mayores puntajes
   const [ score2, setEcore2] = useState();
   const [ score3, setEcore3] = useState();
   const [ score4, setEcore4] = useState();
   const [ score5, setEcore5] = useState();
   
   const [ name1, setName1] = useState();
   const [ name2, setName2] = useState();
   const [ name3, setName3] = useState();
   const [ name4, setName4] = useState();
   const [ name5, setName5] = useState();

  
   
   // english section 
 

  const [subTitulo1, setSubtitulo1] = useState("Este es el final. Tu")
  const [subTitulo2,  setSubtitulo2] = useState("RESULTADO  ")
  const [subTitulo3,setSubtitulo3] = useState("es el valor actual de tu dinero disponible, sumado al valor actual de tus inversiones.")
  const [subTitulo4,setSubtitulo4] = useState("luego de tus inversiones, la cantidad de dinero que tienes es:")
  const [acciones,setAcciones] = useState("Puedes volver a intentarlo, y así obtener un lugar dentro de los mejores puntajes.")

 
  const [ puntajes,setpuntajes] = useState("MEJORES PUNTAJES: ")
  const [btnPuntajes,setBtnpuntajes] = useState("Ver mayores puntajes")

  useEffect(()=>{

   setPortafolio( sumatoria * 1000000) // aqui tomo estos props enviados del componente padre y se los doy al hook portafolio... multiplico por 1000000 ya que parseFloat me redujo mucho los decimales y neceito ver la cantidad en millones

   setEcore1(localStorage.getItem("inputValue1"));  // esta linea dentro del useeffect me toma el valor del hook score alamcenado abajo dentro del condicional y lo renderiza
   setEcore2(localStorage.getItem("inputValue2"));
   setEcore3(localStorage.getItem("inputValue3"));
   setEcore4(localStorage.getItem("inputValue4"));
   setEcore5(localStorage.getItem("inputValue5"));

   setName1(localStorage.getItem("inputValue6")); // esta linea dentro del useeffect me toma el valor del hook name alamcenado abajo dentro del condicional y lo renderiza
   setName2(localStorage.getItem("inputValue7"));
   setName3(localStorage.getItem("inputValue8"));
   setName4(localStorage.getItem("inputValue9"));
   setName5(localStorage.getItem("inputValue10"));


   if ( idioma == "English") {

    setSubtitulo1("This is the end. Your ")
    setSubtitulo2("RESULT ")
    setSubtitulo3(" is the current value of your available money, added to the current value of your investments. ")
    setSubtitulo4(" After your investments, the amount of money you have is: ")
    setAcciones(" You can try again, and thus obtain a place among the best scores. ")
    setpuntajes("BEST SCORES: ")
    setBtnpuntajes("See higher scores ")

    }


  }, []);




  const focusPoint = useRef(null); // el useref() me permite tomar el valor del input como un document.getbyid... me permite maniuplarlo en el dom
  const focusPointName = useRef(null);

  const focusPoint2 = useRef(null);
  const focusPointName2 = useRef(null);
  
  const focusPoint3 = useRef(null);
  const focusPointName3 = useRef(null);
  
  const focusPoint4 = useRef(null);
  const focusPointName4 = useRef(null);
  
  const focusPoint5 = useRef(null);
  const focusPointName5 = useRef(null);
  
  const onClickHandler = () => {

    document.getElementById("puntajes").style.display = "block";
    document.getElementById("boton").style.display = "none";


   if (  focusPoint.current.value <  portafolio ) { // este focuspoint.current.value me toma el valor acutal del input... es como un document.getbyid en react
    setEcore1(portafolio )
    localStorage.setItem("inputValue1", portafolio); // con esta linea almaceno en el valor del hook portafolio en la memoria del browser y le doy ese valor al hook score
    setName1(setSubmittedText)
    localStorage.setItem("inputValue6", setSubmittedText); // con esta linea almaceno en el valor del hook setsubmittedtext en la memoria del browser y le doy ese valor al hook name

   } else if (focusPoint2.current.value <  portafolio  ) {
    setEcore2(portafolio )
    localStorage.setItem("inputValue2", portafolio);
    setName2(setSubmittedText)
    localStorage.setItem("inputValue7", setSubmittedText); 

   } else if (focusPoint3.current.value <  portafolio  ) {
    setEcore3(portafolio )
    localStorage.setItem("inputValue3", portafolio);
    setName3(setSubmittedText)
    localStorage.setItem("inputValue8", setSubmittedText); 

   }  else if (focusPoint4.current.value <  portafolio  ) {
    setEcore4(portafolio)
    localStorage.setItem("inputValue4", portafolio);
    setName4(setSubmittedText)
    localStorage.setItem("inputValue9", setSubmittedText); 

   } else if (focusPoint5.current.value <  portafolio  ) {
    setEcore5(portafolio )
    localStorage.setItem("inputValue5", portafolio);
    setName5(setSubmittedText)
    localStorage.setItem("inputValue10", setSubmittedText); 

   } else {
    localStorage.removeItem("inputValue5", portafolio)
    localStorage.removeItem("inputValue10", setSubmittedText) // si no entra dentro de los 5 primeros me borra el último para no llenar el localstorage
   }
 }; // al darle click al boton de mejores puntajes me activa este onclick que me pone en las casillas el nombre y puntaje si el jugador nuevo tiene el puntaje superior

  return(
     <div className='resultados'>
         <section id='score'>
             <h3>{subTitulo1} <span>{subTitulo2}</span>  {subTitulo3}</h3>
             <h2 className='tu'><span>{setSubmittedText}</span> {subTitulo4}</h2>
             <h2 className='tuss'>{"$" + "  " + portafolio?.toLocaleString()}</h2>
             <h4>{acciones}</h4>
         </section>
         <div className='mejores'> 
                <h2>{puntajes}</h2>
                <button id='boton' onClick={onClickHandler}>{btnPuntajes}</button>
                <section id='puntajes'>
                    <div>
                        < input value={"1." + " " +name1}  ref={focusPointName}  readOnly></input>
                        < input  name='inputValue1'  value={score1?.toLocaleString()}   ref={focusPoint}  readOnly></input>
                    </div>
                    <div>
                        < input value={"2." + " " + name2}    ref={focusPointName2}  readOnly></input>
                        < input value={ score2?.toLocaleString()}   ref={focusPoint2}  readOnly></input>
                    </div>
                    <div>
                        < input   value={"3." + " " +name3}  ref={focusPointName3}  readOnly></input>
                        < input  name='inputValue3' value={score3?.toLocaleString()}   ref={focusPoint3}  readOnly></input>
                    </div>
                    <div>
                        < input value={"4." + " " +name4}  ref={focusPointName4}  readOnly></input>
                        < input value={score4?.toLocaleString()}  ref={focusPoint4}  readOnly></input>
                    </div>
                    <div>
                        < input value={"5." + " " +name5}   ref={focusPointName5}  readOnly></input>
                        < input value={ score5?.toLocaleString()}   ref={focusPoint5}  readOnly></input>
                    </div>
                </section>
         </div>
     </div>

  )
}