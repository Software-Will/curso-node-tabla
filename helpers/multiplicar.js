const fs = require('fs');
const colors = require('colors');

//Si el usuario no da un argumento por defecto se creara con el #5
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${(base * i)}\n`;
        }

        //Validacion para imprimir la tabla en consola
        if (listar) {
            console.log('=========================='.rainbow);
            console.log(`\tTabla del ${base}`.rainbow);
            console.log('=========================='.rainbow);
            console.log(salida.green);
        }

        //Se crea el archivo
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); //Mas simple que el writeFile

        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }
}


module.exports = {
    crearArchivo
}