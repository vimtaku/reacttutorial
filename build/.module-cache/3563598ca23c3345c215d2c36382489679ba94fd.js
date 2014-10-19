/** @jsx React.DOM */
var CommentList = React.createClass({displayName: 'CommentList',
  render: function() {
    return (
      React.DOM.div({className: "commentList"}, 
        Comment({author: "Pete Hunt"}, "This is one comment"), 
        Comment({author: "Jordan Walke"}, "This is *another* comment")
      )
    );
  }
});

var Comment = React.createClass({displayName: 'Comment',
  render: function() {
    return (
      React.DOM.div({className: "comment"}, 
        React.DOM.h2({className: "commentAuthor"}, 
          this.props.author
        ), 
        this.props.children
      )
    );
  }
});
React.renderComponent(
  CommentList(null),
  document.getElementById('content')
);
