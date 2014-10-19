/** @jsx React.DOM */
var CommentList = React.createClass({displayName: 'CommentList',
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        Comment({author: comment.author}, 
          comment.text
        )
      );
    });
    return (
      React.DOM.div({className: "commentList"}, 
        commentNodes
      )
    );
  }
});
