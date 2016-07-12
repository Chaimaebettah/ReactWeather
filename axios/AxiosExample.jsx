var axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?units=metric&appid=ca5f258259c03d80dea7184f71c506b5';

module.exports = {

  geTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return  axios.get(requestUrl).then(function(res){
    console.log(location);

    if(res.data.cod && res.data.message){
        throw new Error(res.data.message)
      }else{
        return res.data.main.temp;

      }
    },function(res){
      throw new Error(res.data.message)
    })
  }
};