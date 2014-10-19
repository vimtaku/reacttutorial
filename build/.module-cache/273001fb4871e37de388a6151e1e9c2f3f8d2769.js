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
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});

    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   type: 'POST',
    //   data: comment,
    //   success: function(data) {
    //       this.setState({data: data});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //       console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
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
        CommentForm({onCommentSubmit: this.handleCommentSubmit})
      )
    );
  }
});

React.renderComponent(
  CommentBox({url: "http://localhost:8000/src/comments.json", pollInterval: 2000}),
  document.getElementById('content')
);
