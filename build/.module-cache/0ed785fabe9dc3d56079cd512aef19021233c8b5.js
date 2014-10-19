/** @jsx React.DOM */
var CommentList = React.createClass({displayName: 'CommentList',
  render: function() {
    return (
      React.DOM.div({className: "commentList"}, 
        Comment({author: "Pete Hunt"}, "This is one comment"), 
        Comment({author: "Jordan Walke"}, 
            "## hogehoge"
        )
      )
    );
  }
});

React.renderComponent(
  CommentBox(null),
  document.getElementById('content')
);
