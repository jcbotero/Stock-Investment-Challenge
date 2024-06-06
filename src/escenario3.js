
import './App.css';
import { useState, useEffect, useRef } from 'react'
import { data, dataEn, grupalNews, grupalNewsEn, ecopetrol, ecopetrolEn, bancolombia, bancolombiaEn, cemargos, cemargosEn, gNutresa, gNutresaEn, grupalEn } from './Noticias';
import React from 'react';



export const grupall = [
   "El fondo internacional ZKAPITAL ha decidido aumentar su exposición al mercado accionario colombiano, por lo cual, en los próximos meses comprará acciones.",
   "El estado en una política por impulsar el AHORRO en el país, impulsa un proyecto de ley para que los recursos pensionales, sean invertidos en mayor medida en renta variable nacional (acciones).",
   "El banco de inversión internacional JP MORGAN ha decidido ajustar su estrategia de inversión internacional, por lo cual, recomienda a sus clientes destinar mayor porcentaje de su number de inversión a economías emergentes latinoamericanas.",
   "Según los últimos sondeos previos a elecciones presidenciales en la región, se prevé un fuerte giro hacia políticas de izquierda en Sudamérica.",
   "Colombia como país, logra adjudicarse una importante patente para el desarrollo industrial en la nación que impulsará considerablemente el crecimiento económico.",
   "¡Hay acuerdo!.  Las bolsas de Colombia, México y Brasil, han decidido unirse, buscando ser un foco de mayor atracción de capitales foráneos. ",
   "Oleada de inversionistas. En las últimas semanas, ha crecido el apetito por los ETF ICOLCAP y HCOLSEL, fondos que invierten de forma diversificada en el mercado accionario colombiano",
   "¡Finalmente se declara en quiebra!. El gigante banco norteamericano US BANK no logra llegar a acuerdos con acreedores, por lo cual, cierra sus puertas, generando incertidumbre sobre el estado de la economía.",
   "¡Estalla la guerra!. El intenso conflicto geopolítico entre Suecia y Noruega, no lograr resolverse por la vía diplomática. Hay temor en la región.",
   
   "El fondo internacional ABUDABI en un repentino cambio de estrategia, ha decidido reducir su exposición al mercado accionario colombiano, por lo cual, en los próximos meses venderá acciones.",
   "El estado en una política por impulsar el GASTO SOCIAL en el país, impulsa un proyecto de ley para que los recursos pensionales, sean invertidos en menor medida en renta variable nacional (acciones).",
   "Ajustando su estrategia de inversión internacional, el reconocido banco CITY GROUP ha hecho cambios, por lo cual, recomienda a sus clientes destinar menor porcentaje de sus inversiones a economías emergentes latinoamericanas.",
   "Según los últimos sondeos previos a elecciones presidenciales en la región, se prevé un fuerte giro hacia políticas de derecha en Sudamérica.",
   "Un fuerte terremoto en el sur-este nacional, deja centenares de muertos y grandes afectaciones a la economía del país.",
   "Ante algunos desacuerdos finales, la integración prevista entre las bolsas de Colombia, México y Brasil queda momentáneamente postergada.",
   "¡El último que cierre la puerta!. En las últimas semanas, se ha reducido el apetito por los ETF ICOLCAP y HCOLSEL, fondos que invierten de forma diversificada en el mercado accionario colombiano.",
   "Después de 3 días de reuniones a puerta cerrada, los representantes de los máximos organismos económicos europeos, logran llegar a un acuerdo para recatar la economía francesa de su crisis actual.",
   "¡Se firma la Paz! Después de varios meses de conflictos bélicos, se logra un acuerdo de cese de hostilidades entre Rusia y Ucrania."
]


const ecoo = [
  
   "La OPEP (Organización de países exportadores de petróleo), prevé que los próximos meses algunos de sus miembros reduzcan fuertemente la producción de crudo.",
   "Recién salido del horno, el informe de reservas de petróleo de Ecopetrol, muestra un incremento sobresaliente del valor y cantidad de las mismas.",
   "Éxito exploratorio. Ecopetrol acaba de informar, el descubrimiento de un yacimiento de petróleo con grandes perspectivas en el mar del Caribe colombiano.",

   "Se espera una fuerte contracción de la economía China, que reducirá en gran medida la demanda de petróleo a nivel mundial.",
   "Debido a problemas operativos, cae el valor y cantidad de las reservas de petróleo de Ecopetrol.",
   "Atentado a Oleoducto. En horas de la mañana, grupos insurgentes atentaron con explosivos oleoducto de Ecopetrol, afectando el transporte por algunas semanas."
 
]


const bcoll = [
 
   "Crece fuertemente el número de créditos de libre inversión en los hogares, debido a una mayor predisposición de las familias a endeudarse.",
   "Bancolombia es incluida en índice internacional, lo cual le dará mayor visibilidad a inversionistas extranjeros.",
   "Tasas de captación bancarias se esperan fuertemente reducidas, lo cual permitirás pagar menores tasas de interés a los ahorradores.",
  
   "Se espera una reducción en la colocación de créditos por parte de las entidades bancarias.",
   "Bancolombia sale de índice internacional, lo cual le dará menor visibilidad a inversionistas extranjeros.",
   "Para apalancar su estrategia de internacionalización, Bancolombia planea una emisión de acciones, aumentando las que se encuentran actualmente en circulación."
 
]

const cargoss = [
 
   "Grandes expectativas para el sector construcción se tienen luego de aumentar considerablemente las compras de vivienda sobre planos en el país.",
   "Cementos Argos planea listar sus acciones en el mercado norteamericano para captar una mayor atención internacional.",
   "Lanzamiento de programa de obras de infraestructura 6G, proyecta aumentar la demanda de cemento en el país.",
 
   "Cementos argos informa retraso de un año para la entrada en operación de su nueva plata de cemento.",
   "El sector constructor colombiano espera una reducción en la demanda de obras civiles para los próximos meses.",
   "Cementos Argos pierde demanda contra municipio de Antioquía, por lo cual deberá pagar una fuerte indemnización."
 
]


const nutresaa = [
 
   "Grupo Nutresa se toma Europa. En los próximos años espera abrir 20 tiendas de Juan Valdez en el viejo continente.",
   "Junta directiva de Grupo Nutresa ve subvalorada su acción, y, por tanto, lanza programa de recompra de acciones.",
   "Grupo Nutresa inaugura nva planta de producción de alimentos, con una tecnología que le permitirá reducir costos sustancialmente.",
 
   "Precio internacional del café sube 50% en los últimos meses, por lo que se cree, afectara a las empresas que lo usen como materia prima.",
   "El Grupo ASIAN COFFEE , aliado de Nutresa en los países asiáticos, se declara en bancarrota, por lo cual, se desconoce el futuro de sus negocios.",
   "3.	Tiendas Tostao, presenta pretenciosa demanda multimillonaria contra Grupo Nutresa y su subsidiaria Juan Valdez, por presunta competencia desleal.",
 
]




export const grupEN = [
   "The international fund ZKAPITAL has decided to increase its exposure to the Colombian stock market, therefore, in the coming months it will buy shares.",
   "The state, in a policy to promote SAVINGS in the country, is promoting a bill so that pension resources are invested to a greater extent in national variable income (shares).",
   "The international investment bank JP MORGAN has decided to adjust its international investment strategy, which is why it recommends its clients allocate a greater percentage of their investment number to emerging Latin American economies.",
   "According to the latest polls prior to presidential elections in the region, a strong shift towards leftist policies is expected in South America.",
   "Colombia as a country manages to be awarded an important patent for industrial development in the nation that will considerably boost economic growth.",
   "There is an agreement! The stock markets of Colombia, Mexico and Brazil have decided to unite, seeking to be a focus of greater attraction for foreign capital.",
   "Wave of investors. In recent weeks, appetite for the ICOLCAP and HCOLSEL ETFs, funds that invest in a diversified manner in the Colombian stock market, has grown",
   "It finally declares bankruptcy! The giant North American bank US BANK cannot reach agreements with creditors, which is why it closes its doors, generating uncertainty about the state of the economy.",
   "War breaks out! The intense geopolitical conflict between Sweden and Norway cannot be resolved through diplomatic means. There is fear in the region.",
   
   "The international fund ABUDABI, in a sudden change of strategy, has decided to reduce its exposure to the Colombian stock market, which is why, in the coming months, it will sell shares.",
   "The state, in a policy to boost SOCIAL EXPENDITURE in the country, is promoting a bill so that pension resources are invested to a lesser extent in national variable income (shares).",
   "Adjusting its international investment strategy, the renowned bank CITY GROUP has made changes, which is why it recommends its clients allocate a lower percentage of their investments to emerging Latin American economies.",
   "According to the latest polls prior to presidential elections in the region, a strong shift towards right-wing policies is expected in South America.",
   "A strong earthquake in the national south-east leaves hundreds of dead and great damage to the country's economy.",
   "Due to some final disagreements, the planned integration between the Colombian, Mexican and Brazilian stock exchanges is momentarily postponed.",
   "The last one to close the door! In recent weeks, appetite for the ICOLCAP and HCOLSEL ETFs, funds that invest in a diversified manner in the Colombian stock market, has decreased.",
   "After 3 days of closed-door meetings, representatives of the highest European economic organizations manage to reach an agreement to rescue the French economy from its current crisis.",
   "Peace is signed! After several months of war, an agreement to cease hostilities is reached between Russia and Ukraine."
]


const ecooE = [
  
   "OPEC (Organization of Petroleum Exporting Countries) expects that in the coming months some of its members will sharply reduce crude oil production.",
   "Fresh out of the oven, Ecopetrol's oil reserves report shows an outstanding increase in their value and quantity.",
   "Exploratory success. Ecopetrol has just reported the discovery of an oil field with great prospects in the Colombian Caribbean Sea.",
 
   "A sharp contraction of the Chinese economy is expected, which will greatly reduce global oil demand.",
   "Due to operational problems, the value and quantity of Ecopetrol's oil reserves falls.",
   "Attack on Oil Pipeline. In the morning, insurgent groups attacked the Ecopetrol oil pipeline with explosives, affecting transportation for a few weeks."
 
]


const bcollE = [
 
   "The number of free investment loans in households is growing strongly, due to a greater predisposition of families to get into debt.",
   "Bancolombia is included in the international index, which will give greater visibility to foreign investors.",
   "Bank deposit rates are expected to be sharply reduced, which will allow savers to pay lower interest rates.",
  
   "A reduction in the placement of credits by banking entities is expected.",
   "Bancolombia leaves the international index, which will give it less visibility to foreign investors.",
   "To leverage its internationalization strategy, Bancolombia plans to issue shares, increasing those currently in circulation."
 
 
]

const cargossE = [
 
   "There are great expectations for the construction sector after considerably increasing off-plan home purchases in the country.",
  "Cementos Argos plans to list its shares in the North American market to attract greater international attention.",
  "Launch of 6G infrastructure works program, projects to increase cement demand in the country.",

  "Cementos Argos reports a delay of one year for the entry into operation of its new cement plant.",
  "The Colombian construction sector expects a reduction in demand for civil works in the coming months.",
  "Cementos Argos loses lawsuit against the municipality of Antioquía, for which it must pay a heavy compensation."
 
]


const nutresaaE = [
 
   "Grupo Nutresa is taking over Europe. In the coming years it hopes to open 20 Juan Valdez stores in the old continent.",
  "Grupo Nutresa's board of directors sees its stock as undervalued and, therefore, launches a share buyback program.",
  "Grupo Nutresa inaugurates a food production plant, with technology that will allow it to substantially reduce costs.",

  "The international price of coffee has risen 50% in recent months, which is believed to affect companies that use it as a raw material.",
  "The ASIAN COFFEE Group, an ally of Nutresa in Asian countries, declares bankruptcy, therefore, the future of its businesses is unknown.",
  "Tiendas Tostao, presents a pretentious multimillion-dollar lawsuit against Grupo Nutresa and its subsidiary Juan Valdez, for alleged unfair competition.",
 
]




 export default function Escenario3( {idioma,setPortaec3,setPortaBan3, setPortaCem3,setPortaNut3, setEcova, setBanva,setCemva,setNutva, cantiEco,cantiBan,cantiCem,cantiNut,  setEcova2,setBanva2,setCemva2,setNutva2, cantiEco2, cantiBan2,cantiCem2,cantiNut2, setEcova3,setBanva3,setCemva3,setNutva3, cantiEco3, cantiBan3,cantiCem3,cantiNut3  } ) { // aqui estoy recibiendo las props enviadas desde el parent App
  


  const [number, setNumber] = useState({one: "", two: "", three: "", four: "", five: "", six: "", seven: "", eigth: "", nine: "2000", ten: "30000", eleven: "4000", twelve: "40000", thirteen: "100000000", catorce: " ", quince: " ", dieciseis: " ", diecisiete: "" , dieciocho:"", diecinueve: "", veinte:"", veinteuno: "", veintedos: " " }) // el hook es suma ... y lo que hay dentro de usestate es el objeto que contiene ese hook
 

  // Noti ciclo economico
  const [Ecoprice , setEcop] = useState() 
  const [Banprice , setBanp] = useState() 
  const [Cemprice , setCemp] = useState() 
  const [Nutreprice , setNutp] = useState() 

  //Noti grupal
  
  const [Ecopriceg , setEcog] = useState() 
  const [Banpriceg , setBang] = useState() 
  const [Cempriceg , setCemg] = useState() 
  const [Nutrepriceg , setNutg] = useState() 

  // noti de cada empresa

  const [Ecopricei , setEcoi] = useState() 
  const [Banpricei , setBani] = useState() 
  const [Cempricei , setCemi] = useState() 
  const [Nutrepricei , setNuti] = useState() 

  
  // english section 

  const [noticias, setNoticias] = useState(data[2])
  const [subTitulo1, setSubtitulo1] = useState("INFORMACIÓN ACTUAL")
  const [subTitulo2,  setSubtitulo2] = useState("Fase del ciclo económico :")
  const [subTitulo3,setSubtitulo3] = useState("Noticia general")
  const [subTitulo4,setSubtitulo4] = useState("Noticias empresariales")
  const [acciones,setAcciones] = useState("PRECIOS ACCIONES")

  useEffect(()=>{

    // cuadarar cantidades a comprar y vender más el dinero en el disponible 

    const { one, two, three, four, five, six, seven, eigth, nine, ten, eleven, twelve, thirteen, catorce , quince, dieciseis, diecisiete , dieciocho, diecinueve, veinte, veinteuno, veintedos} = number
   
   // aqui si el ciclo economico del escenario afecta de una los precios... y no como en las noticias donde se afectan por las noticias del escenario anterior
   
   if ( idioma == "español") {

      setNoticias(data[2])

     switch (data[2].general) { // casos para poder saber el escenario economico y asi darle valor a las acciones
        case "Crecmiento temprano: Precios bajos, inflación creciendo moderadamente, tasas de interés altas, pero con algunos meses empezando a bajar" :
          setEcop( Number(nine) * 1.07 );
          setBanp( Number(ten) * 1.07 );
          setCemp( Number(eleven) * 1.07 );
          setNutp( Number(twelve) * 1.07 );
        break;
        case "Expansión: Precios han crecido algo, inflación creciendo con consistencia, reducción de tasas de interés finalizada." :
          setEcop( Number(nine) * 1.1 );
          setBanp( Number(ten) * 1.1 );
          setCemp( Number(eleven) * 1.1 );
          setNutp( Number(twelve) * 1.1 );
        break;
        case "Auge: Precios han venido crecimiento prolongadamente, inflación alta, inicio de alza de tasas de interés." :
          setEcop( Number(nine) * 1.15 );
          setBanp( Number(ten) * 1.15 );
          setCemp( Number(eleven) * 1.15 );
          setNutp( Number(twelve) * 1.15 );
        break;
        case "Contracción: Corrección moderada en los precios, inflación alta empezando a estabilizar su crecimiento, alza de tasas de interés próxima a terminar." :
          setEcop( Number(nine) * 0.9 );
          setBanp( Number(ten) * 0.9 );
          setCemp( Number(eleven) * 0.9 );
          setNutp( Number(twelve) * 0.9 );
        break;
        case "Recesión: Precios enfrentan amplias caídas, inflación camino hacia su piso, próximo inicio de reducción de tasas." :
          setEcop( Number(nine) * 0.85 );
          setBanp( Number(ten) * 0.85 );
          setCemp( Number(eleven) * 0.85 );
          setNutp( Number(twelve) * 0.85 );
        break;
     }// los set para sacar el valor del hook deben ir dentro de los condiconales if o switch
   
     if ( grutt <= 8) {
      setEcog( Number(nine) * 1.05  );
      setBang( Number(ten) * 1.05  );
      setCemg( Number(eleven) * 1.05  );
      setNutg(Number(twelve) * 1.05);
    } else {
      setEcog( Number(nine) * 0.95  );
      setBang( Number(ten) * 0.95  );
      setCemg( Number(eleven) * 0.95  );
      setNutg(Number(twelve) * 0.95);
    } 
    

    if (ecott <= 2 ) {
      setEcoi( Number(nine) * 1.1 )
   } else {
      setEcoi( Number(nine) * 0.9 ) }
   
   if ( bancott <= 2 ) {
      setBani( Number(ten) * 1.1 )
   } else {
      setBani( Number(ten) * 0.9 )}

   if ( cematt <= 2 ) {
         setCemi( Number(eleven) * 1.1 )
      } else {
         setCemi( Number(eleven) * 0.9 )}
   
   if ( nutett <= 2 ) {
            setNuti( Number(twelve) * 1.1 )
    } else {
            setNuti( Number(twelve) * 0.9 )}
   
   

   }  else if (idioma == "English")  {

      setNoticias(dataEn[2])
      setSubtitulo1("CURRENT INFORMATION")
      setSubtitulo2("Phase of the economic cycle:")
      setSubtitulo3("General news:")
      setSubtitulo4("Company news:")
    setAcciones("STOCK PRICES")



      switch (dataEn[2].general) { // casos para poder saber el escenario economico y asi darle valor a las acciones
         case "Early growth: Low prices, inflation growing moderately, interest rates high, but with some months starting to fall" :
           setEcop( Number(nine) * 1.07 );
           setBanp( Number(ten) * 1.07 );
           setCemp( Number(eleven) * 1.07 );
           setNutp( Number(twelve) * 1.07 );
         break;
         case  "Expansion: Prices have risen somewhat, inflation growing consistently, interest rate reduction completed." :
           setEcop( Number(nine) * 1.1 );
           setBanp( Number(ten) * 1.1 );
           setCemp( Number(eleven) * 1.1 );
           setNutp( Number(twelve) * 1.1 );
         break;
         case "Boom: Prices have been growing for a long time, high inflation, beginning of interest rate hikes." :
           setEcop( Number(nine) * 1.15 );
           setBanp( Number(ten) * 1.15 );
           setCemp( Number(eleven) * 1.15 );
           setNutp( Number(twelve) * 1.15 );
         break;
         case "Contraction: Moderate correction in prices, high inflation beginning to stabilize its growth, increase in interest rates close to ending." :
           setEcop( Number(nine) * 0.9 );
           setBanp( Number(ten) * 0.9 );
           setCemp( Number(eleven) * 0.9 );
           setNutp( Number(twelve) * 0.9 );
         break;
         case "Recession: Prices face wide falls, inflation on its way to its floor, rate reductions coming soon." :
           setEcop( Number(nine) * 0.85 );
           setBanp( Number(ten) * 0.85 );
           setCemp( Number(eleven) * 0.85 );
           setNutp( Number(twelve) * 0.85 );
         break;
      }// los set para sacar el valor del hook deben ir dentro de los condiconales if o switch
  
      if ( gruttE <= 8) {
         setEcog( Number(nine) * 1.05  );
         setBang( Number(ten) * 1.05  );
         setCemg( Number(eleven) * 1.05  );
         setNutg(Number(twelve) * 1.05);
       } else {
         setEcog( Number(nine) * 0.95  );
         setBang( Number(ten) * 0.95  );
         setCemg( Number(eleven) * 0.95  );
         setNutg(Number(twelve) * 0.95);
       } 
       
   
       if (ecottE <= 2 ) {
         setEcoi( Number(nine) * 1.1 )
      } else {
         setEcoi( Number(nine) * 0.9 ) }
      
      if ( bancottE <= 2 ) {
         setBani( Number(ten) * 1.1 )
      } else {
         setBani( Number(ten) * 0.9 )}
   
      if ( cemattE <= 2 ) {
            setCemi( Number(eleven) * 1.1 )
         } else {
            setCemi( Number(eleven) * 0.9 )}
      
      if ( nutettE <= 2 ) {
               setNuti( Number(twelve) * 1.1 )
       } else {
               setNuti( Number(twelve) * 0.9 )}
      
  
  
   }
    


   },[number])//hago uso del useEffect para actualizar el hook suma, cantieco, valueco y demas,  cada vez que el hook number cambie, destructuro el hook number
     // no poner hooks en las operaciones del useEffect... no actualilza despues bien los valores




    // constantes para calcular cambios en precios, para saber el index dentro de la array original 
 
    const grutt =  grupall.indexOf(grupalNews[1]); // aqui estoy encontrando el index de la noticia grupal en la array original para poder dar un valor y alterar el precio de la accion de eco
    // estas constantes van con el index [0] por que el precio depende de la noticia del escenario anterior
   

    const gruttE =  grupalEn.indexOf(grupalNewsEn[1]); // lo mismo de arriba pero en ingles


    const ecott =  ecoo.indexOf(ecopetrol[1]);   
    const bancott =  bcoll.indexOf(bancolombia[1]);
    const cematt =  cargoss.indexOf(cemargos[1]);
    const nutett =  nutresaa.indexOf(gNutresa[1]);

    const ecottE =  ecooE.indexOf(ecopetrolEn[1]);   
    const bancottE =  bcollE.indexOf(bancolombiaEn[1]);
    const cemattE =  cargossE.indexOf(cemargosEn[1]);
    const nutettE =  nutresaaE.indexOf(gNutresaEn[1]);  // lo mismo de arriba pero en ingles


 
  // sumatoria de hooks para sacar valores totales de todas las afectaciones de precios
  
 const precioEco = ((Ecoprice) + (Ecopriceg) + (Ecopricei)) / 3  ; // mirar si puedo mandar asi al otro componente
 const precioBan = ((Banprice ) + (Banpriceg) + (Banpricei)) / 3  ; // mirar si puedo mandar asi al otro componente
 const precioCem = ((Cemprice) + (Cempriceg) + (Cempricei)) / 3  ; // mirar si puedo mandar asi al otro componente
 const precioNut = ((Nutreprice) + (Nutrepriceg) + (Nutrepricei)) / 3  ; // mirar si puedo mandar asi al otro componente
 

  //actualizacion de los valores del portafolio al cambiar de precio las acciones por nuevo escenario

  setEcova(precioEco * cantiEco ) // aqui estyo actualizando setEcova..que es el nuevo valor del portafolio de Eco (precio por cantidad)
  setEcova2(precioEco * cantiEco2)
  setEcova3(precioEco * cantiEco3)
  setPortaec3(precioEco) // aqui estoy dandole valor a este hook para que tome el valor para el dinero disponible
  

  setBanva( precioBan * cantiBan)
  setBanva2( precioBan * cantiBan2)
  setBanva3( precioBan * cantiBan3)
  setPortaBan3( precioBan)


  setCemva( precioCem * cantiCem)
  setCemva2( precioCem * cantiCem2)
  setCemva3( precioCem * cantiCem3)
  setPortaCem3( precioCem)


  setNutva( precioNut * cantiNut)
  setNutva2( precioNut * cantiNut2)
  setNutva3( precioNut * cantiNut3)
  setPortaNut3( precioNut)
 



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
              <div className='esce2precios'>
               <div >
                  <p>Ecopetrol : </p>
                  <input type="number"   value={precioEco.toFixed(0)}  name="nine"  min="1" step="1"   readOnly></input>
               </div>
               <div>
                  <p>Bancolombia : </p>
                  <input type="number"   value={precioBan.toFixed(0)} name="ten"  min="1" step="1"  readOnly></input>
               </div>
               <div>
                  <p>Cementos Argos : </p>
                  <input  type="number"  name="eleven" value={precioCem.toFixed(0)}  min="1" step="1"  readOnly></input>
               </div>
               <div>
                     <p>Grupo Nutresa : </p>
                     <input type="number"   name="twelve" value={precioNut.toFixed(0)} min="1" step="1"  readOnly></input>
               </div>
               </div>
        </section>
    </div>
  );
}

