/**
 * BLOQUE 1 - Codigo sincrono
 * Una linea se ejecuta inmediatamente despues de la otra
 * no hay codigo dependiente o bloqueante.
 */
 /* console.log(‘============== BLOQUE 1 ==============’);
 console.log(‘Primero’); 
 console.log(‘Segundo’);
 console.log(‘Tercero’); */
 



 console.log('============== BLOQUE 2 ==============');
 const validatePayment = () => {
    setTimeout(() =>{
        console.log('2 Validadndo la tarjeta')
    })
}

 console.log('1 Presionael boton de comprar'); 
 validatePayment();
 console.log('3 Ver el mensaje de "gracias"');