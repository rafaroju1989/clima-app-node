const axios = require('axios')

const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion)

    const resp = await axios.get(`https://geocode.xyz/${encodedUrl}?json=1`)
        // console.log(resp.data);
        // console.log(resp.data.longt === "0.00000");
    if (resp.data.longt === "0.00000") {
        throw new Error(`No hay resultados para ${direccion}`)
    }
    const data = resp.data;
    const dir = data.standard.city
    const lat = data.latt
    const lng = data.longt

    return {
        dir,
        lat,
        lng
    }


}

module.exports = {
    getLugarLatLng
}