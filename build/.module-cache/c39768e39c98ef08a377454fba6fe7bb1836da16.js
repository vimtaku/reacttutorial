/** @jsx React.DOM */
var converter = new Showdown.converter();
var Comment = React.createClass({displayName: 'Comment',
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      React.DOM.div({className: "comment"}, 
        React.DOM.h2({className: "commentAuthor"}, 
          this.props.author
        ), 
        React.DOM.span({dangerouslySetInnerHTML: {__html: rawMarkup}})
      )
    );
  }
});
