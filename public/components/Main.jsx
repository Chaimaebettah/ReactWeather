var React = require('react');
var Nav = require('Nav');


var Main = (props) => {
  return (
    <div>
      <h2>this is the Main </h2>
      <Nav/>
      {props.children}
    </div>

  )
};


module.exports = Main;