/** @jsx React.DOM */
var CommentForm = React.createClass({displayName: 'CommentForm',
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
    this.props.onCommentSubmit({author: author, text: text});

    return;
  },
  render: function() {
    return (
      React.DOM.form({className: "commentForm", onSubmit: this.handleSubmit}, 
        React.DOM.input({type: "text", placeholder: "Your name", ref: "author"}), 
        React.DOM.input({type: "text", placeholder: "Say something...", ref: "text"}), 
        React.DOM.input({type: "submit", value: "Post"})
      )
    );
  }
});
