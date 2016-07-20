var React = require('react');
var {Link}=require('react-router');

var Examples = (props) => {
  return (
    <div>
      <div className="text-center">
        <p> This is some Examples try out: </p>
        <ol>
          <li>
            <Link to="/?location=Boston">Boston ,MA</Link>
          </li>
          <li>
            <Link to="/?location=Rabat"> Rabat,MA</Link>
          </li>
        </ol>
      </div>
    </div>
  )
};

module.exports = Examples;