var React = require('react');

var WeatherMessage = (props) => {
  return (
    <h3 className="text-center">It is {props.temp} degree {props.location}</h3>
  );
};
module.exports = WeatherMessage;
