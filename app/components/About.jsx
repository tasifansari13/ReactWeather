var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather app , which I have build. I am learning react from udemy and its very cool</p>
      <p>Below are some of the tools which I have used</p>
        <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the javascript framwork used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Use for getting the weather.
        </li>
      </ul>
    </div>

  )
};
module.exports = About;
