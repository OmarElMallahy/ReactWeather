var axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=8bb7ce6b5b2a6b76161515dda5085efa&units=metric';

//8bb7ce6b5b2a6b76161515dda5085efa

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  //   return axios.get(requestUrl).then(res => {
  //     if (res.data.cod === 200){
  //         return res.data.main.temp;//.data.main.temp;
  //     }
  //     throw res.data.cod;
  // }, res => {
  //     throw (res && ((res.response && res.response.data && (res.response.data.message || res.response.data)) || (res.code))) || res;
  // });

    return axios.get(requestUrl).then(function(res){
      
      if (res.data.cod && res.data.message){
        throw new Error (res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}