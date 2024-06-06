import logo from './logo.svg';
import './App.css';
import Escenario1 from './escenario';
import React, { useState, useEffect, useRef } from 'react';
import Escenario2 from './escenario2';
import Escenario3 from './escenario3';
import Escenario4 from './escenario4';
import Escenario6 from './escenario6';
import Escenario5 from './escenario5';
import Resultado from './resultado';
import Canti1 from './cantidades/cantiEsce1';
import Canti2 from './cantidades/cantiEsce2';
import Canti3 from './cantidades/cantiEsce3';
import Canti4 from './cantidades/cantiEsce4';
import Canti5 from './cantidades/cantiEsce5';
import Canti6 from './cantidades/cantiEsce6';



export default function App()  {

 
  
  const [number, setNumber] = useState({one: "", two: "", three: "", four: "", five: "", six: "", seven: "", eigth: "", nine: "2000", ten: "30000", eleven: "4000", twelve: "40000", thirteen: "100000000", catorce: "", quince: " ", dieciseis: " ", diecisiete: "" , dieciocho:"", diecinueve: "", veinte:"", veinteuno: "", veintedos: " " }) // el hook es suma ... y lo que hay dentro de usestate es el objeto que contiene ese hook
  const [suma , setSuma] = useState() // aqui el hook es suma que con setSuma manipula el valor del objeto del hook number
 
  const [cantiEco , setEco] = useState(0) // aqui el hook es cantiEco que con setSuma manipula el valor del objeto del hook number
  const [valuEco , setEcova] = useState(0) 

  
  const [cantiBan , setBan] = useState(0) 
  const [valuBan , setBanva] = useState(0) 

  const [cantiCem , setCem] = useState(0) 
  const [valuCem , setCemva] = useState(0) 

  const [cantiNut , setNut] = useState(0) 
  const [valuNut , setNutva] = useState(0) 

  
  const [ component, setComponente] = useState("Esce1"); // este usestate es para definir que escenario renderizar... primero toma el "Esce1"
  const [ cantidades, setCantidades] = useState("Canti1"); // lo mismo de arriba pero con los componentes de comprar y ventas


 const ecoCanti = useRef()
 
 const valorEco = useRef()

 
  const handleClick = () => {  // este handleclick no solo me cambia el component sino que tbn actualiza sus props.


   const numero = 0;

  if (dispo.current.value < numero.toLocaleString()) { // condicional para cuadrar que cantidades de acciones o dinero disponible no sean menores a 0.. va el tolalstring por que lo estoy comparando con un valor que tiene tbn esa function-
   alert(" Tu dinero disponible no puede ser menor a 0")}

  else if( cantiEco < 0  || cantiBan < 0  || cantiCem < 0  || cantiNut < 0) {  // condicional para decir que las cantidades de las acciones en el portafolio no pueden ser negativas
   alert("Las cantidades de acciones en tu portafolio no pueden ser menores a 0")
  }

else  {

   if (component === "Esce1" && < Escenario1 /> ) {
     setComponente( "Esce2" ) // este hangleclick hace que al darle click al boton.. me cambie el componente a renderizarse segun el que esté actualmente
     setCantidades("Canti2")
   
 
   } else if (component === "Esce2" && < Escenario2  />) {
      setComponente( "Esce3" ) 
      setCantidades("Canti3")

   } else if (component === "Esce3" && < Escenario3  />) {
      setComponente( "Esce4" ) 
      setCantidades("Canti4")

   }else if (component === "Esce4" && < Escenario4  />) {
      setComponente( "Esce5" ) 
      setCantidades("Canti5")

   }else if (component === "Esce5" && < Escenario5  />) {
      setComponente( "Esce6" ) 
      setCantidades("Canti6")
   

   } else if (component === "Esce6" && < Escenario6  />) {
   setComponente( "Resultado" ) 
   setSumatoria( ((parseFloat((dispo.current.value)) + parseFloat((portafo.current.value)))) )//parseFloat me permite tomar strings como numeros y asi puedo sumar estos dos useref
 // para lograr la sumatoria del dispo y el valor del portafolio... lo coloco aqui para que agarre el ultimo valor de esos inputs con sus useref
   document.getElementById("cantidades").style.display = " none "
   document.getElementById("cantidades2").style.display = " none "
   document.getElementById("cantidades3").style.display = " none "
   document.getElementById("form").style.display = " none " 
}
 }
     
};  // mirar si colosco el useeffect dentro del handleclick... y coloco condicional para cuadrar valores
   


const [enteredText, setEnteredText] = useState(""); // hago este state para manejar el texto del input
const [submittedText, setSubmittedText] = useState(null); // este state es para pasar y almacenar el texto del input nombre luego de darle submitt


const textChangeHandler = (i) => {
   setEnteredText(i.target.value);
 }; // esta function me permite escribir en el input y manejar su valor... el texto queda almacenado en el hook enteredText




 const submitHandler = (event) => {
   event.preventDefault(); // esto lo pongo para que no me recargue la pagina cuando le doy click al submitt boton
   setSubmittedText(enteredText); // me almacena el hook del valor del texto "enteredtext" en el otro hook "submittedtext"
   document.getElementById("main").style.display = " grid "
   document.getElementById("form").style.display = " none " 

  // localStorage.clear(); //para limpiar el storage si algo buscar como limpiar los 4 o 3 últimos cuando se llene el storage

 };  // function que se dispara cuando se hace submitt al registro del nombre del participante



// aqui voy a declarar los usestates y hooks para traer las props de los components canti y precios de los escenarios

 const [cantiEco2 , setEco2] = useState(null) // usestate para fijar la cantidad de eco en el esce 2
 const [precioEco , setPriceEc2] = useState(2000) //usestate para precio eco en el esce2
const [ portaec2, setPortaec2] = useState(null) // este usestate es para enviarlo al esce2 y alla tomar el precio de eco para multiplicarlo en el div del disponible
const [valuEco2, setEcova2] = useState(null) //este ustate es para enviarlo al esce2 y alla actualizar su valor con los precios de ese esce
const [cantiEco3 , setEco3] = useState(null)
const [valuEco3, setEcova3] = useState(null)
const [ portaec3, setPortaec3] = useState(null)
const [cantiEco4 , setEco4] = useState(null)
const [valuEco4, setEcova4] = useState(null)
const [ portaec4, setPortaec4] = useState(null)
const [cantiEco5 , setEco5] = useState(null)
const [valuEco5, setEcova5] = useState(null)
const [ portaec5, setPortaec5] = useState(null)
const [cantiEco6 , setEco6] = useState(null)
const [valuEco6, setEcova6] = useState(null)
const [ portaec6, setPortaec6] = useState(null)


const [cantiBan2 , setBan2] = useState(null) 
const [precioBan , setPriceBan2] = useState(30000) 
const [ portaBan2, setPortaBan2] = useState(null) 
const [valuBan2, setBanva2] = useState(null) 
const [cantiBan3 , setBan3] = useState(null) 
const [valuBan3, setBanva3] = useState(null) 
const [ portaBan3, setPortaBan3] = useState(null) 
const [cantiBan4 , setBan4] = useState(null) 
const [valuBan4, setBanva4] = useState(null) 
const [ portaBan4, setPortaBan4] = useState(null) 
const [cantiBan5 , setBan5] = useState(null) 
const [valuBan5, setBanva5] = useState(null) 
const [ portaBan5, setPortaBan5] = useState(null) 
const [cantiBan6 , setBan6] = useState(null) 
const [valuBan6, setBanva6] = useState(null) 
const [ portaBan6, setPortaBan6] = useState(null) 


const [cantiCem2 , setCem2] = useState(null) 
const [precioCem , setPriceCem2] = useState(4000) 
const [ portaCem2, setPortaCem2] = useState(null) 
const [valuCem2, setCemva2] = useState(null) 
const [cantiCem3 , setCem3] = useState(null) 
const [valuCem3, setCemva3] = useState(null) 
const [ portaCem3, setPortaCem3] = useState(null) 
const [cantiCem4 , setCem4] = useState(null) 
const [valuCem4, setCemva4] = useState(null) 
const [ portaCem4, setPortaCem4] = useState(null) 
const [cantiCem5 , setCem5] = useState(null) 
const [valuCem5, setCemva5] = useState(null) 
const [ portaCem5, setPortaCem5] = useState(null) 
const [cantiCem6 , setCem6] = useState(null) 
const [valuCem6, setCemva6] = useState(null) 
const [ portaCem6, setPortaCem6] = useState(null) 


const [cantiNut2 , setNut2] = useState(null) 
const [precioNut , setPriceNut2] = useState(40000) 
const [ portaNut2, setPortaNut2] = useState(null) 
const [valuNut2, setNutva2] = useState(null)
const [cantiNut3 , setNut3] = useState(null) 
const [valuNut3, setNutva3] = useState(null)
const [ portaNut3, setPortaNut3] = useState(null) 
const [cantiNut4 , setNut4] = useState(null) 
const [valuNut4, setNutva4] = useState(null)
const [ portaNut4, setPortaNut4] = useState(null) 
const [cantiNut5 , setNut5] = useState(null) 
const [valuNut5, setNutva5] = useState(null)
const [ portaNut5, setPortaNut5] = useState(null) 
const [cantiNut6 , setNut6] = useState(null) 
const [valuNut6, setNutva6] = useState(null)
const [ portaNut6, setPortaNut6] = useState(null) 





// aqui abajo voy a darle valores a los states .. actualizados con los valores de las props.
// Escenario 1

  function cantidadesEco (cantiEco )  {
      setEco( cantiEco );
       setEcova( (cantiEco  * precioEco) )
   } // aqui estoy declarando la prop que traje del hijo y le doy el valor en setEco()

   function cantidadesBan (cantiBan)  { setBan( cantiBan )
    setBanva( cantiBan * precioBan  ) } // aqui estoy declarando la prop que traje del hijo y le doy el valor en setBan()

   function cantidadesCem (cantiCem)  {   setCem( cantiCem )  
   setCemva( cantiCem * precioCem  ) } // aqui estoy declarando la prop que traje del hijo y le doy el valor en setCem()
  
   function cantidadesNut (cantiNut)  {   setNut( cantiNut )
         setNutva( cantiNut* precioNut  ) } // aqui estoy declarando la prop que traje del hijo y le doy el valor en setNut()


 // Escenario 2        
 
 function cantidadesEco2 (cantiEco2)  { setEco2(cantiEco2) 
    setEcova2( cantiEco2 * precioEco )} 
 function cantidadesBan2 (cantiBan2)  {  setBan2( cantiBan2 ) 
   setBanva2( cantiBan2 * precioBan)} 
  function cantidadesCem2 (cantiCem2)  {   setCem2( cantiCem2 ) 
  setCemva2( cantiCem2 * precioCem)} 
  function cantidadesNut2 (cantiNut2)  {    setNut2( cantiNut2 ) 
   setNutva2( cantiNut2 * precioNut)} 

// Escenario 3

function cantidadesEco3 (cantiEco3)  { setEco3(cantiEco3)
   setEcova3( cantiEco3 * precioEco )} 
function cantidadesBan3 (cantiBan3)  {  setBan3( cantiBan3 ) 
  setBanva3( cantiBan3 * precioBan)} 
 function cantidadesCem3 (cantiCem3)  {   setCem3( cantiCem3 ) 
 setCemva3( cantiCem3 * precioCem)} 
 function cantidadesNut3 (cantiNut3)  {    setNut3( cantiNut3 ) 
  setNutva3( cantiNut3 * precioNut)} 


// Escenario 4

function cantidadesEco4 (cantiEco4)  { setEco4(cantiEco4)
   setEcova4( cantiEco4 * precioEco )} 
function cantidadesBan4 (cantiBan4)  {  setBan4( cantiBan4 ) 
  setBanva4( cantiBan4 * precioBan)} 
 function cantidadesCem4 (cantiCem4)  {   setCem4( cantiCem4 ) 
 setCemva4( cantiCem4 * precioCem)} 
 function cantidadesNut4 (cantiNut4)  {    setNut4( cantiNut4 ) 
  setNutva4( cantiNut4 * precioNut)} 



// Escenario 5

function cantidadesEco5 (cantiEco5)  { setEco5(cantiEco5)
   setEcova5( cantiEco5 * precioEco )} 
function cantidadesBan5 (cantiBan5)  {  setBan5( cantiBan5 ) 
  setBanva5( cantiBan4 * precioBan)} 
 function cantidadesCem5 (cantiCem5)  {   setCem5( cantiCem5 ) 
 setCemva5( cantiCem5 * precioCem)} 
 function cantidadesNut5 (cantiNut5)  {    setNut5( cantiNut5 ) 
  setNutva5( cantiNut5 * precioNut)} 


// Escenario 6

function cantidadesEco6 (cantiEco6)  { setEco6(cantiEco6)
   setEcova6( cantiEco6 * precioEco )} 
function cantidadesBan6 (cantiBan6)  {  setBan6( cantiBan6 ) 
  setBanva6( cantiBan6 * precioBan)} 
 function cantidadesCem6 (cantiCem6)  {   setCem6( cantiCem6 ) 
 setCemva6( cantiCem6 * precioCem)} 
 function cantidadesNut6 (cantiNut6)  {    setNut6( cantiNut6 ) 
  setNutva6( cantiNut6 * precioNut)} 


  // resultados

  const dispo = useRef()
  const portafo = useRef()
  const [ sumatoria, setSumatoria] = useState( ) // el setsumatoria lo use en el handlecick para que tome el valor al momento de llegar a este componente y envio el hook sumatoria al componente resultado como prop para alla renderizar el valor
  


  // internacionalization -  english lenguague


  const [ idioma, setIdioma] = useState("español")

  const [ titulo, setTitul] = useState("Pon a prueba tus conocimientos en bolsa")
  const [ titulob, setTitulb] = useState("Instrucciones")
  
  const [ formT, setFormT] = useState("Antes de empezar escribe tu nombre")
  const [ formBtn, setFormBtn] = useState("EMPEZAR")
  const [ formF, setFormf] = useState("Bienvenido y buena suerte")

  
  const [ into1, setInto1] = useState(" Se ha tratado de recrear un universo simplificado, pero similar al que enfrentan los inversionistas día a día para tomar decisiones de asignación de capital. En este juego vas a tener un ")
  const [ span1, setSpan1] = useState(" presupuesto de 100 millones " )
  const [ into1b, setInto1b] = useState(" , donde vas a poder destinarlo todo o parcialmente, entre las diferentes titulos de renta variable(acciones) que hemos dejado a tu disposicion. El juego corre sobre distintos escenarios (periodos de tiempo), donde vas a encontrar diferente información para poder tomar tus decisiones.")
  const [ span2, setSpan2] = useState(" El objetivo es obtener la mayor rentabiidad posible. ")
  const [ span3, setSpan3] = useState("REGLA GENERAL: ")
  const [ intro2, setIntro2] = useState("Los precios de las acciones de manera general, se mueven más por")
  const [ span4, setSpan4] = useState(" expectativas del futuro cercano ")
  const [ intro2b, setIntro2b] = useState(", que por el pasado y presente de las empresas y su medio circundante. Con base en esto, la estrategia del juego se basa en observar la información dada en cada periodo de tiempo, para tratar de ")
  const [ span5, setSpan5] = useState("prever el comportamiento de los  precios.")

  const [ siguiente, setSiguitente] = useState("Cuando estés listo:  ")
  const [ siguienteBTN, setSiguitenteBtn] = useState("SIGUIENTE ESCENARIO")


  const [ dDisponble, setDdisponible] = useState("Dinero disponible:  ")
  const [ valorPOrta, setValorporta] = useState("Valor de tu portafolio:  ")
  const [ cantidadE, setCantidadE] = useState("Cantidad :  ")
  const [ ValorMer , setValorMer] = useState("Valor a Mercado :  ")


  function spanish ( ) {
    document.getElementById("welcome").style.display = " none "
    document.getElementById("intro").style.display = " block "
  }

  function english ( ) {
   document.getElementById("welcome").style.display = " none "
   document.getElementById("intro").style.display = " block "
   setTitul("Test your knowledge in the stock market")
   setTitulb("Instructions")
   setFormT("Before starting write your name")
   setFormBtn("START")
   setFormf("Welcome and good luck")
   setInto1( "An attempt has been made to recreate a simplified universe, but similar to what investors face every day when making capital allocation decisions. In this game you will have a")
   setSpan1(" budget of 100 million")
   setInto1b(", where you will be able to allocate all or part of it, among the different variable income titles (shares) that we have left at your disposal. The game runs on different scenarios (time periods), where you will find different information to make your decisions.")
   setSpan2("The objective is to obtain the highest possible profitability. ")
   setSpan3("GENERAL RULE: ")
   setIntro2("Stock prices, in general, are moved more by")
   setSpan4( "expectations of the near future,")
   setIntro2b( "than by the past and present of companies and their surrounding environment. Based on this, the game strategy is based on observing the information given in each period of time, to try to")
   setSpan5( " predict the behavior of prices. " )

   setSiguitente("When you are ready:")
   setSiguitenteBtn("NEXT SCENARIO")

   setDdisponible("Available Money :  ")
   setValorporta("Value of your portfolio:  ")
   setCantidadE("Quantity: ")
   setValorMer("Market Value: ")

   setIdioma("English")
 }

  return (
    <>
    <div className="App">
      <header className="App-header">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&family=DM+Sans:wght@500&family=Delicious+Handrawn&family=Inter:wght@200;600;700;900&family=League+Spartan:wght@900&family=Roboto+Condensed&family=Rubik&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/068ec41cf0.js" crossorigin="anonymous"></script>
        <section id='welcome' >
                <h1>Bienvenido / Welcome</h1>
                <h2>Escoge / Choose </h2>
                <div className="flags">
                  <img onClick={english} src='./american.jpg' ></img>
                  <img onClick={spanish} src='./spanish.jfif' ></img>
                </div>
        </section>
        <section style={{ display : "none" }} id='intro' >
            <h1>{titulo}</h1>
            <h1 id='instrucciones'>{titulob}</h1>
            <p>{into1}<span>{span1}</span>{into1b}<span>{span2}</span></p>
            <p><span>{span3}</span>{intro2}<span>{span4}</span>{intro2b}<span>{span5}</span></p>
            <section className='registro'>
               <form id='form' onSubmit={submitHandler}>
                     <h2>{formT}</h2>
                     <div className='name'>
                        <input placeholder="Escribe aquí tu nombre" type='text' value={enteredText} onChange={textChangeHandler}  required></input>
                        <button type="submit"  >{formBtn} </button>
                     </div>
                  </form>
                  <h2 > {formF} {submittedText}</h2>
               </section>
       </section>
       </header>
      <main id='main'>
        <section className='components'>
        { component === "Esce1" && < Escenario1 idioma={idioma}  />} {/* aqui declaro todos los componente para decirle al hook componente que Esce1 es igual al escenario 1... Esce2 al escenario 2... y así  */}
       { component === "Esce2" && < Escenario2  idioma={idioma}  setPortaec2={setPortaec2} setPortaBan2={setPortaBan2} setPortaCem2={setPortaCem2} setPortaNut2={setPortaNut2} setEcova={setEcova} setBanva={setBanva} setCemva={setCemva} setNutva={setNutva}  cantiEco={cantiEco} cantiBan={cantiBan} cantiCem={cantiCem} cantiNut={cantiNut} setEcova2={setEcova2} setBanva2={setBanva2} setCemva2={setCemva2} setNutva2={setNutva2} cantiEco2={cantiEco2} cantiBan2={cantiBan2} cantiCem2={cantiCem2} cantiNut2={cantiNut2} />} {/* aqui estoy pasando los states (ej setEcova) como props de este componente App a su child (Escenario2)..  esto para que en Esce me acutalice los valores de acuerdo a los nuevos precios de las acciones*/}
       { component === "Esce3" && < Escenario3  idioma={idioma}   setPortaec3={setPortaec3} setPortaBan3={setPortaBan3} setPortaCem3={setPortaCem3} setPortaNut3={setPortaNut3} setEcova={setEcova} setBanva={setBanva} setCemva={setCemva} setNutva={setNutva}  cantiEco={cantiEco} cantiBan={cantiBan} cantiCem={cantiCem} cantiNut={cantiNut} setEcova2={setEcova2} setBanva2={setBanva2} setCemva2={setCemva2} setNutva2={setNutva2} cantiEco2={cantiEco2} cantiBan2={cantiBan2} cantiCem2={cantiCem2} cantiNut2={cantiNut2}  setEcova3={setEcova3} setBanva3={setBanva3} setCemva3={setCemva3} setNutva3={setNutva3} cantiEco3={cantiEco3} cantiBan3={cantiBan3} cantiCem3={cantiCem3} cantiNut3={cantiNut3}    />} {/* aqui estoy pasando los states (ej setEcova) como props de este componente App a su child (Escenario3)..  esto para que en Esce me acutalice los valores de acuerdo a los nuevos precios de las acciones*/}
       { component === "Esce4" && < Escenario4  idioma={idioma}  setPortaec4={setPortaec4} setPortaBan4={setPortaBan4} setPortaCem4={setPortaCem4} setPortaNut4={setPortaNut4} setEcova={setEcova} setBanva={setBanva} setCemva={setCemva} setNutva={setNutva}  cantiEco={cantiEco} cantiBan={cantiBan} cantiCem={cantiCem} cantiNut={cantiNut} setEcova2={setEcova2} setBanva2={setBanva2} setCemva2={setCemva2} setNutva2={setNutva2} cantiEco2={cantiEco2} cantiBan2={cantiBan2} cantiCem2={cantiCem2} cantiNut2={cantiNut2}  setEcova3={setEcova3} setBanva3={setBanva3} setCemva3={setCemva3} setNutva3={setNutva3} cantiEco3={cantiEco3} cantiBan3={cantiBan3} cantiCem3={cantiCem3} cantiNut3={cantiNut3}  setEcova4={setEcova4} setBanva4={setBanva4} setCemva4={setCemva4} setNutva4={setNutva4} cantiEco4={cantiEco4} cantiBan4={cantiBan4} cantiCem4={cantiCem4} cantiNut4={cantiNut4} />} {/* aqui estoy pasando los states (ej setEcova) como props de este componente App a su child (Escenario4)..  esto para que en Esce me acutalice los valores de acuerdo a los nuevos precios de las acciones*/}
       { component === "Esce5" && < Escenario5 idioma={idioma}  setPortaec5={setPortaec5} setPortaBan5={setPortaBan5} setPortaCem5={setPortaCem5} setPortaNut5={setPortaNut5} setEcova={setEcova} setBanva={setBanva} setCemva={setCemva} setNutva={setNutva}  cantiEco={cantiEco} cantiBan={cantiBan} cantiCem={cantiCem} cantiNut={cantiNut} setEcova2={setEcova2} setBanva2={setBanva2} setCemva2={setCemva2} setNutva2={setNutva2} cantiEco2={cantiEco2} cantiBan2={cantiBan2} cantiCem2={cantiCem2} cantiNut2={cantiNut2}  setEcova3={setEcova3} setBanva3={setBanva3} setCemva3={setCemva3} setNutva3={setNutva3} cantiEco3={cantiEco3} cantiBan3={cantiBan3} cantiCem3={cantiCem3} cantiNut3={cantiNut3}  setEcova4={setEcova4} setBanva4={setBanva4} setCemva4={setCemva4} setNutva4={setNutva4} cantiEco4={cantiEco4} cantiBan4={cantiBan4} cantiCem4={cantiCem4} cantiNut4={cantiNut4} setEcova5={setEcova5} setBanva5={setBanva5} setCemva5={setCemva5} setNutva5={setNutva5} cantiEco5={cantiEco5} cantiBan5={cantiBan5} cantiCem5={cantiCem5} cantiNut5={cantiNut5}  />} {/* aqui estoy pasando los states (ej setEcova) como props de este componente App a su child (Escenario4)..  esto para que en Esce me acutalice los valores de acuerdo a los nuevos precios de las acciones*/}
       { component === "Esce6" && < Escenario6 idioma={idioma}  setPortaec6={setPortaec6} setPortaBan6={setPortaBan6} setPortaCem6={setPortaCem6} setPortaNut6={setPortaNut6} setEcova={setEcova} setBanva={setBanva} setCemva={setCemva} setNutva={setNutva}  cantiEco={cantiEco} cantiBan={cantiBan} cantiCem={cantiCem} cantiNut={cantiNut} setEcova2={setEcova2} setBanva2={setBanva2} setCemva2={setCemva2} setNutva2={setNutva2} cantiEco2={cantiEco2} cantiBan2={cantiBan2} cantiCem2={cantiCem2} cantiNut2={cantiNut2}  setEcova3={setEcova3} setBanva3={setBanva3} setCemva3={setCemva3} setNutva3={setNutva3} cantiEco3={cantiEco3} cantiBan3={cantiBan3} cantiCem3={cantiCem3} cantiNut3={cantiNut3}  setEcova4={setEcova4} setBanva4={setBanva4} setCemva4={setCemva4} setNutva4={setNutva4} cantiEco4={cantiEco4} cantiBan4={cantiBan4} cantiCem4={cantiCem4} cantiNut4={cantiNut4} setEcova5={setEcova5} setBanva5={setBanva5} setCemva5={setCemva5} setNutva5={setNutva5} cantiEco5={cantiEco5} cantiBan5={cantiBan5} cantiCem5={cantiCem5} cantiNut5={cantiNut5} setEcova6={setEcova6} setBanva6={setBanva6} setCemva6={setCemva6} setNutva6={setNutva6} cantiEco6={cantiEco6} cantiBan6={cantiBan6} cantiCem6={cantiCem6} cantiNut6={cantiNut6}/>} {/* aqui estoy pasando los states (ej setEcova) como props de este componente App a su child (Escenario4)..  esto para que en Esce me acutalice los valores de acuerdo a los nuevos precios de las acciones*/}
       { component === "Resultado" && < Resultado idioma={idioma}  setSubmittedText={submittedText} sumatoria={sumatoria} />} 
        </section>
        <section id='cantidades' className='cantidades'>
        { cantidades === "Canti1" && <  Canti1 idioma={idioma}  Eco={cantidadesEco} Ban={cantidadesBan} Cem={cantidadesCem} Nut={cantidadesNut} />}  {/* aqui hago lo mismo de arriba pero con los componentes de cantidades  */}
       { cantidades === "Canti2" && <  Canti2 Eco2={cantidadesEco2}  setPriceEc2={setPriceEc2} Ban2={cantidadesBan2} setPriceBan2={setPriceBan2} Cem2={cantidadesCem2} setPriceCem2={setPriceCem2} Nut2={cantidadesNut2} setPriceNut2={setPriceNut2} />}
       { cantidades === "Canti3" && < Canti3 Eco3={cantidadesEco3} Ban3={cantidadesBan3} Cem3={cantidadesCem3} Nut3={cantidadesNut3}   />} 
       { cantidades === "Canti4" && < Canti4 Eco4={cantidadesEco4} Ban4={cantidadesBan4} Cem4={cantidadesCem4} Nut4={cantidadesNut4}   />} 
       { cantidades === "Canti5" && < Canti5 Eco5={cantidadesEco5} Ban5={cantidadesBan5} Cem5={cantidadesCem5} Nut5={cantidadesNut5}  />} 
       { cantidades === "Canti6" && < Canti6 Eco6={cantidadesEco6} Ban6={cantidadesBan6} Cem6={cantidadesCem6} Nut6={cantidadesNut6}   />}  
         </section>
         <section id='cantidades2'>
         <h3>{dDisponble}</h3>
           <div>
                <div className='portafoliocan'>
                    <h3>$</h3>
                    <input id='dinero' ref={dispo}  name='thirteen' value={Number(100000000 - ( ((cantiEco *2000) +  (cantiEco2 * portaec2) + (cantiEco3 * portaec3) +  (cantiEco4 * portaec4) + (cantiEco5 * portaec5) + (cantiEco6 * portaec6)) + ((cantiBan * 30000) + (cantiBan2 * portaBan2) + (cantiBan3 * portaBan3) +  (cantiBan4 * portaBan4) + (cantiBan5 * portaBan5) + (cantiBan6 * portaBan6)) + ((cantiCem * 4000) + (cantiCem2 * portaCem2) + (cantiCem3 * portaCem3) + (cantiCem4 * portaCem4) + (cantiCem5 * portaCem5) + (cantiCem6 * portaCem6)) + ((cantiNut * 40000) + (cantiNut2 * portaNut2) + (cantiNut3 * portaNut3) + (cantiNut4 * portaNut4) +  (cantiNut5 * portaNut5) +  (cantiNut6 * portaNut6)) ))?.toLocaleString()}  readOnly></input>
                 </div>
             </div>
               
             <div>
             <h3>{valorPOrta}</h3>
                 <div className='portafoliocan'>
                    <h3>$</h3>
                    <input id='portaf' ref={portafo}   name="veintedos" value={((valuEco) + (valuEco2) + (valuEco3) + (valuEco4)  + (valuEco5) + (valuEco6) + (valuBan) + (valuBan2) + (valuBan3) + (valuBan4) + (valuBan5) + (valuBan6) + (valuCem) + (valuCem2) + (valuCem3) + (valuCem4) + (valuCem5) + (valuCem6) + (valuNut) + (valuNut2) + (valuNut3) + (valuNut4) + (valuNut5) + (valuNut6)   )?.toLocaleString()}  readOnly></input>{/* debo colocar ?.toLocaleString() despuesde la variable para que me separe el numero en decimales */}
                 </div>
                 <div className='acciporta'>
                     <h4>Ecopetrol:</h4>
                     <div>
                    <div>
                     <div className='portafoliocan'>
                   <p>{cantidadE}</p>
                   <input name='catorce'  ref={ecoCanti} value={(cantiEco + cantiEco2 + cantiEco3 + cantiEco4  + cantiEco5  + cantiEco6)?.toLocaleString() } readOnly></input>
                   </div>
                   </div>
                        <div className='portafoliocan'>
                            <p>{ValorMer}</p>
                            <input name='quince' id='valorEco'  value={((valuEco)+ (valuEco2) +(valuEco3) + (valuEco4) + (valuEco5) + (valuEco6) )?.toLocaleString()} readOnly></input>{/* debo colocar ?.toLocaleString() despuesde la variable para que me separe el numero en decimales */}
                        </div>
                     </div>
                 </div>
                 <div className='acciporta'>
                     <h4>Bancolombia:</h4>
                     <div>
                     <div className='portafoliocan'>
                        <p>{cantidadE}</p>
                         <input name='dieciseis'  value={(cantiBan + cantiBan2 + cantiBan3 + cantiBan4 + cantiBan5 + cantiBan6)?.toLocaleString()} readOnly></input>
                      </div>
                        <div className='portafoliocan'>
                            <p>{ValorMer}</p>
                            <input name='diecisiete'   value={(valuBan + valuBan2 + valuBan3 + valuBan4 + valuBan5 + valuBan6)?.toLocaleString()} readOnly></input>{/* debo colocar ?.toLocaleString() despuesde la variable para que me separe el numero en decimales */}
                        </div>
                     </div>
                 </div>
                 <div className='acciporta'>
                     <h4>Cementos Argos:</h4>
                     <div>
                     <div className='portafoliocan'>
                          <p>{cantidadE}</p>
                        <input  name='dieciocho'  value={(cantiCem + cantiCem2 + cantiCem3 + cantiCem4 + cantiCem5 + cantiCem6)?.toLocaleString()} readOnly></input>
                     </div>
                        <div className='portafoliocan'>
                            <p>{ValorMer}</p>
                            <input name='dicecinueve'   value={(valuCem + valuCem2 + valuCem3 + valuCem4 + valuCem5 + valuCem6)?.toLocaleString()} readOnly></input>
                        </div>
                     </div>
                 </div>
                 <div className='acciporta'>
                      <h4>Grupo Nutresa:</h4>
                     <div>
                     <div className='portafoliocan'>
                           <p>{cantidadE}</p>
                           <input name='veinte'  value={(cantiNut + cantiNut2 + cantiNut3 + cantiNut4  + cantiNut5  + cantiNut6)?.toLocaleString() } readOnly></input>
                      </div>
                        <div className='portafoliocan'>
                            <p>{ValorMer}</p>
                            <input name='veinteuno'   value={(valuNut + valuNut2 + valuNut3 + valuNut4 + valuNut5 + valuNut6)?.toLocaleString()} readOnly></input>
                        </div>
                     </div>
                 </div>
             </div>
        </section>
        <footer id='cantidades3'>
              <h3>{siguiente}</h3>
              <button onClick={handleClick}> {siguienteBTN}</button> 
        </footer>
      </main>
    </div>
    </>
  )
}

