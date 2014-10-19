/** @jsx React.DOM */
var CommentList = React.createClass({displayName: 'CommentList',
  render: function() {
    return (
      React.DOM.div({className: "commentList"}, 
        "Hello, world! I am a CommentList."
      )
    );
  }
});

var CommentForm = React.createClass({displayName: 'CommentForm',
  render: function() {
    return (
      React.DOM.div({className: "commentForm"}, 
        "Hello, world! I am a CommentForm."
      )
    );
  }
});


