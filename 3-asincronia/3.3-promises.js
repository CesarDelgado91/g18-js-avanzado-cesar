// BLOQUE 4 -Solucion 2 de Promises(pending, resolve y reject)

console.log('============== BLOQUE 4 ==============');


console.log('============== BLOQUE 2 ==============');
 const validatePaymentPromise = () => {

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('2 Validadndo la tarjeta');
           
            const statusArray = [200, 500];
            const randomnResponse = statusArray [Math.floor(Math.random() * statusArray.legth)];
            if (randomResponse === 200) {
                    //200 OK
                    resolve('todo gucci');

            } else {
              // 500 Internal server error
            reject('tu tarjeta fue declinada');
            }
   
            
    }, 0);
    });
    };

    

 console.log('1 Presionael boton de comprar'); 
 validatePaymentPromise()
   .then(response =>
    {
    console.log(response);
    console.log('3 Ver el mensaje de "gracias"');
 })
 .then(() => {
    console.log('4 Entregamos el paquete N dia');

 })
 .catch((error) => {
    console.log('error' , error);
 })

 .finally(() => {
    console.log("=========FINALL=======")
 });
 