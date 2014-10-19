/** @jsx React.DOM */
var CommentForm = React.createClass({displayName: 'CommentForm',
  render: function() {
    return (
      React.DOM.form({className: "commentForm"}, 
        React.DOM.input({type: "text", placeholder: "Your name"}), 
        React.DOM.input({type: "text", placeholder: "Say something..."}), 
        React.DOM.input({type: "submit", value: "Post"})
      )
    );
  }
});
