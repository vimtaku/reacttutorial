// var CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="commentBox">
//         Hello, world! I am a CommentBox.
//       </div>
//     );
//   }
// });
React.renderComponent(
  //<CommentBox />,
  React.DOM.h1(null, 'Hello, world!'),
  document.getElementById('content')
);
