
import React, { useState, useEffect, useRef } from 'react';


export default function Canti2(props ) {

   
  const [number, setNumber] = useState({one: "", two: "", three: "", four: "", five: "", six: "", seven: "", eigth: "", nine: "2000", ten: "30000", eleven: "4000", twelve: "40000", thirteen: "100000000", catorce: " ", quince: " ", dieciseis: " ", diecisiete: "" , dieciocho:"", diecinueve: "", veinte:"", veinteuno: "", veintedos: " " }) // el hook es suma ... y lo que hay dentro de usestate es el objeto que contiene ese hook
   const [cantiEco2 , setEco] = useState(0)
   const [cantiBan2 , setBan] = useState(0) 
   const [cantiCem2 , setCem] = useState(0) 
   const [cantiNut2 , setNut] = useState(0) 


   
// english section

const [span1, setSpan1] = useState("IMPORTANT // IMPORTANTE")
const [aviso, setAviso] = useState("Add a period after each amount // Agrega un punto después de cada cantidad")
const [compras,  setCompra] = useState(" PURCHASES // COMPRAS")
const [ventas,setVentas] = useState("SALES // VENTAS ")


// english section


   useEffect(()=>{

      const { one, two, three, four, five, six, seven, eigth, nine, ten, eleven, twelve, thirteen, catorce , quince, dieciseis, diecisiete , dieciocho, diecinueve, veinte, veinteuno, veintedos} = number

      setEco( (Number(one) - Number(five)) )
      setBan( (Number(two) - Number(six)) )
      setCem( (Number(three) - Number(seven)) )
      setNut( (Number(four) - Number(eigth)) )

     },[number, props])

  
  
  
 const ecanti = useRef(null)
 const banti = useRef(null)
 const cemanti = useRef(null)
 const nutanti = useRef(null)
 
 const ecantis = useRef(null)
 const bantis = useRef(null)
 const cemantis = useRef(null)
 const nutantis = useRef(null)

 const  cantidadesAcci2 = () => {
  
   props.Eco2(cantiEco2) 
   props.Ban2(cantiBan2) 
   props.Cem2(cantiCem2) 
   props.Nut2(cantiNut2) 
  
} // aqui envio la prop de hijo a padre... cuando el jsx hace onchange.

const handleInput = (event) => {
   const { name, value } = event.target
   setNumber({...number, [name]: value  })

   //el campo name es el atributo name de los inputs.  lo que hago es decirle que va a seguir teniendo el mismo valor con un simple ...number
  
}  // function controla los input mediante el event.target, destructurando el campo "name" y el campo "value". lo que hago es actualizar el valor del hook number






return (
   <div>
      <div className='aviso'>
          <h3> <span>{span1}</span><br></br>{aviso}</h3>
      </div>
        <div onChange={cantidadesAcci2} className='cantidadesAcci'>
               <div className='cantidadesAccidiv'>
                 <h4>{compras}</h4>
                 <div >
                    <p>Ecopetrol</p>
                    <input  onChange={handleInput} ref={ecanti} value={number.one} name="one"  className='inputs' ></input> {/* readony no deja escribir sobre el input */}
                 </div>
                 <div>
                    <p>Bancolombia</p>
                    <input onChange={handleInput} ref={banti} value={number.two} name="two" className='inputs' id='banIn' ></input>
                 </div>
                 <div>
                    <p>Cementos Argos</p>
                    <input onChange={handleInput} ref={cemanti} value={number.three} name="three"  className='inputs' id='cemarIn'></input>
                 </div>
                 <div>
                    <p>Grupo Nutresa</p>
                    <input onChange={handleInput} ref={nutanti} value={number.four} name="four"  className='inputs' id='nutreIn'></input>
                 </div>
             </div>
              <div className='cantidadesAccidiv'>
                 <h4>{ventas}</h4>
                 <div >
                    <p>Ecopetrol</p>
                    <input  onChange={handleInput}  ref={ecantis} value={number.five}  name="five"  className='inputs' ></input> {/* readony no deja escribir sobre el input */}
                 </div>
                 <div>
                    <p>Bancolombia</p>
                    <input  onChange={handleInput}  ref={bantis}  value={number.six} name="six" className='inputs' id='banIn' ></input>
                 </div>
                 <div>
                    <p>Cementos Argos</p>
                    <input  onChange={handleInput}  ref={cemantis} value={number.seven} name="seven"  className='inputs' id='cemarIn'></input>
                 </div>
                 <div>
                    <p>Grupo Nutresa</p>
                    <input  onChange={handleInput}  ref={nutantis} value={number.eigth} name="eigth"  className='inputs' id='nutreIn'></input>
                 </div>
                </div>
          </div>
   </div>
)}