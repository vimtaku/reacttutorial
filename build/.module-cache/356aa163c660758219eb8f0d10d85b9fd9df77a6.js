/** @jsx React.DOM */
var converter = new Showdown.converter();
var Comment = React.createClass({displayName: 'Comment',
  render: function() {
    return (
      React.DOM.div({className: "comment"}, 
        React.DOM.h2({className: "commentAuthor"}, 
          this.props.author
        ), 
        converter.makeHtml(this.props.children.toString())
      )
    );
  }
});
