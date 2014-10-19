/** @jsx React.DOM */
var CommentBox = React.createClass({displayName: 'CommentBox',
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      React.DOM.div({className: "commentBox"}, 
        React.DOM.h1(null, "Comments"), 
        CommentList({data: this.state.data}), 
        CommentForm(null)
      )
    );
  }
});
