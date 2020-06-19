const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);
// lugar.getLugarLatLng(argv.direccion)
// .then(console.log)

// clima.getClima("45.35737", "-75.70725")
//     .then(console.log)


const getInfo = async(direccion) => {
    try {
        const get_lugar = await lugar.getLugarLatLng(direccion)
        const get_clima = await clima.getClima(get_lugar.lat, get_lugar.lng)
        return `El clima de ${get_lugar.dir} es de ${get_clima} C`
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)