var React = require('react');
var WeatherForm= require('WeatherForm');
var WeatherMessage= require('WeatherMessage');
var AxiosExample = require('AxiosExample');


var Weather = React.createClass({
  getInitialState(){
    return{
      location:'Boston',
      degree:23
    }
  },
  handleNewLocation:function(location){
    debugger;
    var that = this;
     AxiosExample.geTemp(location).then(function(degree){
      that.setState({
        location:location,
        degree:degree
      })
    },function(errorMessage){
        alert(errorMessage);
    });


  },
  render (){
    var location = this.state.location;
    var degree= this.state.degree;
    return (
      <div>
        <h1 className="text-center">Get Weather </h1>
        <WeatherForm onNewLocation={this.handleNewLocation}/>
        <WeatherMessage location={location} degree={degree}/>

      </div>

    )
  }
});

module.exports = Weather;