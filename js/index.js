
// simbolos [ ] {}  =>
const pedido= document.getElementById("pedido")
// CONSTRUCTOR 
function equipo (tipo, modelo, precio){
    this.tipo = tipo;
    this.modelo = modelo;
    this.precio = precio;
}

// OBJETOS 

// CAMARAS

const equipo1 = new equipo("camara", "sony a 7 s 2", 4200);
const equipo2 = new equipo("camara", "Sony a 6500", 3800);
const equipo3 = new equipo("camara", "Canon R5", 5000);
const equipo4 = new equipo("camara", "canon 5D mark 4", 5000);
// console.log(equipo1.precio)

// LENTES

const equipo5 = new equipo("lente", "Canon 50mm", 1500);
const equipo6 = new equipo("lente", "Canon 75-300mm", 2500);
const equipo7 = new equipo("lente", "Sony 12-24mm", 3800);
const equipo8 = new equipo("lente", "Sony 400mm", 10000);

// MICROFONOS 

const equipo9 = new equipo("microfono", "Rode link", 2500);
const equipo10 = new equipo("microfono", "Rode Wirless", 3000);
const equipo11 = new equipo("microfono", "Rode video", 2000);
const equipo12 = new equipo("microfono", "Rode video micro", 1200);

// TRIPODES
const equipo13 = new equipo("trípode", "Manfrotto Befree 3", 2000);
const equipo14 = new equipo("trípode", "Benrro KH25", 2500);
const equipo15 = new equipo("trípode", "Benrro TMA 38", 2000);
const equipo16 = new equipo("trípode", "Manfrotto 504", 3000);

// SIMULADOR
alert ("Binvenido al cotizador de paquetes, a continuación vas a poder cotizar tu combo de equipos de filmación. Por favor elige 4 equipos para cotizar tu combo, recuerda que podrás ingresar solo un modelo de cada rubro")

// CREACIÓN DE ARRAY "LISTA DE COMPRAS"
let listadecompras= [ ]

let cam = prompt("ingrese  el modelo de la cámara que desea alquiar " +"\n" + "1: Sonya 7 s 2"+"\n" + "2: Sony a 6500" +"\n" + "3: Canon r5" +"\n"+ "4: Canon 5D Mark IV "+"\n" )   //ELECCION DE CAMARA
if (cam==1) {
    listadecompras.push(equipo1)

            
    } else if (cam==2){ 
        listadecompras.push(equipo2)
    
    }else if (cam==3){ 
        listadecompras.push(equipo3)
      
    } else if (cam==4){ 
        listadecompras.push(equipo4)

        
       
    }else { 
        alert("Por favor verifique los datos ingresados" )
    }

    let lent = prompt("ingrese  el modelo de lel lente que desa alquilar: " +"\n" + "1: Canon 50mm"+"\n" + "2: Canon 75-300mm" +"\n" + "3: Sony 12-24mm" +"\n"+ "4: Sony 400mm "+"\n" ) //ELECCION DE LENTE
    if (lent==1) {
        listadecompras.push(equipo5)
       
      
                
        } else if (lent==2){ 
            listadecompras.push(equipo6)
          
        }else if (lent==3){ 
            listadecompras.push(equipo7)
       
        } else if (lent==4){ 
            listadecompras.push(equipo8)

      
        }else { 
            alert("Por favor verifique los datos ingresados" )
        }
        let mic = prompt("ingrese  el modelo de lel Micrófono que desa alquilar: " +"\n" + "1: Rode link"+"\n" + "2: Rode Wirless" +"\n" + "3: Rode video" +"\n"+ "4: Rode video micro "+"\n" ) //ELECCION DE MICROFONO
        if (mic==1) {
            listadecompras.push(equipo9)
            
          
                    
            } else if (mic==2){ 
                listadecompras.push(equipo10)
          
            }else if (mic==3){ 
                listadecompras.push(equipo11)

            } else if (mic==4){ 
                listadecompras.push(equipo12)

              
            }else { 
                alert("Por favor verifique los datos ingresados" )
            }    

            let trip = prompt("ingrese  el modelo de lel trípode que desa alquilar: " +"\n" + "1: Manfrotto Befree 3"+"\n" + "2: Benrro KH25" +"\n" + "3: Benrro TMA 38" +"\n"+ "4: Manfrotto 504 "+"\n" ) //ELECCION DE TRIPODE
            if (trip==1) {
                listadecompras.push(equipo13)

            
                        
                } else if (trip==2){ 
                    listadecompras.push(equipo14)

                  


                    // alert( `usted ha seleccionado ${equipo14.modelo} y tiene un valor de $ ${equipo14.precio} ARS por jornada`)
                }else if (trip==3){ 
                    listadecompras.push(equipo15)

                    
                } else if (trip==4){ 
                    listadecompras.push(equipo16)
                   
                }else { 
                    alert("Por favor verifique los datos ingresados" )
                }    
//console.log (listadecompras)

// CALCULO TOTAL DE EQUIPOS POR JORNADA
const totalcompras = listadecompras.reduce ( (acc, item )=> acc + item.precio, 0)     //UTILIZO UN REDUCE PARA RECORRER EL ARRAY COMPLETO, EXTRAER LOS PRECIOS DE CADA OBJETO Y SUMARLOS
console.log(totalcompras)

listadecompras.forEach( item =>{ 
    console.log (item)
    let equipo = document.createElement("div")
    equipo.innerHTML = `<h6> Usted ha seleccionado: ${item.tipo}</h6>
                        <h4>  Modelo: ${item.modelo}</h4>
                        <p class="xjornada"> Precio x Jornada: $ ${item.precio} ARS</p>`;
    pedido.appendChild(equipo);
})

// CALCULO TOTAL DE EQUIPOS FINAL
let cantidad= prompt ("Ingrese la cantidad de jornadas que utilizara los equipos")
let jornadascantidad = document.createElement("p");
jornadascantidad.innerHTML = `<h2 class= "jornadascantidad">Duración de alquiler: ${cantidad} jornadas</h2>`; 
pedido.append(jornadascantidad);


let montototal= jornadas(totalcompras , cantidad) 

function jornadas(totalcompras, jor) {
         return totalcompras *  parseFloat(jor) 
    }

if(cantidad !=0 && cantidad!= "" ) {


    let alertmonto = document.createElement("p");
    alertmonto.innerHTML = ` <h3 class= "sub"> Sub total: $ ${montototal} ARS</h3>`; 
    pedido.append(alertmonto);

    // alert( `Tu alquiler es de $ ${montototal} ARS`);
    }else{
        alert ("Por favor verifique los datos ingresados"); 
        }

// DESCUENTO PARA ESTUDIANTES
        descuentoestudiante= prompt ("eres estudiante?").toLowerCase () 
    if (descuentoestudiante=="si") {
        let descuento = montototal - (montototal * 0.25)
        // alert( `Por ser estudiante abonas con un 25% off por lo tanto tu costo final es de  $ ${descuento} ARS`);

        let estudiante = document.createElement("p");
        estudiante.innerHTML = `<h4 class="estudiante">Estudiante: Si - 25% off - TOTAL $ ${descuento} </h4>`; 
        pedido.append(estudiante);
        } else if (descuentoestudiante=="no"){ 
            let estudiante = document.createElement("p");
        estudiante.innerHTML = `<h4 class="estudiante">Estudiante: NO -  TOTAL $ ${montototal} </h4>`; 
        document.body.append(estudiante);
            
            // alert(  `Lo sentimos, usted no posee ninguna promoción por lo que debe abonar $  ${montototal} ARS`);
        } else { 
            alert("Por favor verifique los datos ingresados");
        }

        let doubleclick= document.querySelector(".doubleclick")
        console.log(doubleclick)
        doubleclick.ondblclick = (e) => {
            // console.log(click.children[0])
            // console.log(click.children[1])
            doubleclick.children[0].classList.toggle ("notShow")
            doubleclick.children[1].classList.toggle ("show")
        }
