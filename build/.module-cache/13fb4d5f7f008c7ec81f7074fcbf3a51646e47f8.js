/** @jsx React.DOM */
var CommentBox = React.createClass({displayName: 'CommentBox',
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  handleCommentSubmit: function(comment) {
    // TODO: submit to the server and refresh the list
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
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

React.renderComponent(
  CommentBox({url: "http://localhost:8000/src/comments.json", pollInterval: 2000}),
  document.getElementById('content')
);
