var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locatoons to try out</p>
      <ol>
        <li>
          <Link to='/?location=Kolkata'>Kolkata</Link>
        </li>
        <li>
          <Link to='/?location=Mumbai'>Mumbai</Link>
        </li>
      </ol>

    </div>

  )
};

module.exports = Examples;