const patito = require('os');

console.log('Version detalla del sistema: ', patito.version());
console.log('Nombre de la versión del sistema: ', patito.platform());
console.log('Numero de la versión del sistema:' + patito.release());

console.log('Arquitectura: ', patito.arch()); 
console.log('Número de procesadores lógicos:' + patito.cpus().length);
console.log('Información acerca de los cpus: ', patito.cpus());
console.log('Memoria libre en bytes', patito.freemem()); 
console.log('Carpeta del usuario actual: ', patito.homedir()); 
console.log('Mi direccion ip o mi hostname (local): ', patito.hostname()); 

