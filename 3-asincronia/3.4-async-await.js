// BLOQUE 5 -Solucion 3 Async await

console.log('============== BLOQUE 5 ==============');



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

    


 async function main(){
    console.log('1 Presionael boton de comprar');
    try{
        await validatePaymentPromise();
        //await otraPromise();
    }catch(error){
        console.log('error', error);
    }
    
    console.log('3 Ver el mensaje de "gracias"'); 
    console.log('4 Entregamos el paquete N dia');
    console.log("=========FINAL=======")
    console.log('============== FINAL 2 ==============');
 }
 
 main();