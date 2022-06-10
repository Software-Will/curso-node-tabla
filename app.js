const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');
//const colors = require('colors');

console.clear();

//console.log(process.argv); //con esto podemos ver los datos ingresador por consola de forma nativa sin la necesidad de yargs

//console.log(argv);
// console.log('base: yargs', argv.base);

//base, lista = true | false, hasta
crearArchivo(argv.b, argv.l, argv.h)
    .then((msg) => { console.log(`${msg} Creado`.blue); })
    .catch(err => { console.log(err); });


//pasamos argumentos por consola como node app --base=<number>
//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');

//console.log(base);

//const base = 7;

//node app -b <valor> ? --base <valor> -l -h <valor>