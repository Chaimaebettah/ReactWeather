var React = require('react');

var WeatherForm = React.createClass({
  onSubmitClick:function(e){
    e.preventDefault();
    var location = this.refs.inputForm.value;
    if(location){
      this.refs.inputForm.value='';
      this.props.onNewLocation(location);
    }
  },
  render:function(){
    return(
      <div>
        <form onSubmit={this.onSubmitClick}>
          <input type="text" ref="inputForm" placeholder="type your city here "/>
          <button > Get The Weather</button>
        </form>

      </div>
    )
  }
});


module.exports=WeatherForm;