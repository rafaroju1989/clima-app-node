const axios = require('axios')

const getClima = async(lat, lng) => {
    // console.log(lat);
    // console.log(lng);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}0&appid=ce14802f956ac4397fef0931f5a78a31&units=metric`)
    return resp.data.main.temp
}

module.exports = {
    getClima
}