var React = require('react');

var WeatherForm=(props) =>{
  var location = props.location;
  var degree= props.degree;
  return (
    <div>
      <p>the weather in {location} is {degree} degree </p>

    </div>

  )
};

// we can do like this and its correct too
//var WeatherForm=({location,degree}) => {
//  return (
//    <div>
//      <p>the weather in {location} is {degree} degree </p>
//
//    </div>
//
//  )
//};


module.exports=WeatherForm;



















//var WeatherForm = React.createClass({
//  render:function(){
//    var location = this.props.location;
//    var degree= this.props.degree;
//    return(
//      <div>
//        <p>the weather in {location} is {degree} degree </p>
//
//      </div>
//    )
//  }
//
//
//});