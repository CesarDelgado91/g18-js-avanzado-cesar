
 /* BLOQUE 3 - Solucion 1 CALLBACKS
 Un callback es una funcion que pasamos como parametro a otra funcion,
 con el finde ejecutar la funcion que se pasa como parametro en el 
 momento que queremos.
 NOTA: No es una buena practica utilizar callbacks porque se van anidando
 y el codijo se vuelve ilegal. */


 console.log('============== BLOQUE 3 ==============');
 const showSuccessMessage =() => {
    console.log('3 Ver el mensaje de "gracias joven"')
 }
 
 const validatePayment = () => {
    setTimeout(() =>{
        console.log('2 Validadndo la tarjeta')
    })
}

 console.log('1 Presionael boton de comprar'); 
 validatePayment();
 