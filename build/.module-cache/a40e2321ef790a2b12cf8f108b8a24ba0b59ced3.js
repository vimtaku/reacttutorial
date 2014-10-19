/** @jsx React.DOM */
var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return (
      React.DOM.div({className: "commentBox"}, 
        React.DOM.h1(null, "Comments"), 
        CommentList({data: this.props.data}), 
        CommentForm(null)
      )
    );
  }
});

React.renderComponent(
  CommentBox({data: data}),
  document.getElementById('content')
);
