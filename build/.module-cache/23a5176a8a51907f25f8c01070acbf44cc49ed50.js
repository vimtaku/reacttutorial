var CommentBox = React.createClass({
  render: function() {
    return (
      <h1>Hello, world!</h1>
      // <div className="commentBox">
      //   Hello, world! I am a CommentBox.
      // </div>
    );
  }
});
React.renderComponent(
  <CommentBox />,
  document.getElementById('content')
);
