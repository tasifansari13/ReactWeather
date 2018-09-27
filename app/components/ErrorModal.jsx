var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#error-modal'));
    model.open();
  },
  render: function () {
    return (
      <div id="error-modal" className="reveal tiny rext-center" data-reveal>
        <h4>Some Tilte</h4>
        <p>Our error message</p>
        <p>
          <button classNaME="button hollow">
            Okay
          </button>
        </p>
      </div>
    )
  }
});
