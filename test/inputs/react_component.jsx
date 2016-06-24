export default React.createClass({
  render: function() {
    return (
      <div attr={gettext('attr')} {...{spread: gettext('spread')}}>
        {gettext('child component')}
        <div>
          {gettext('nested child component')}
        </div>
        <Table striped bordered condensed hover/>
      </div>
    );
  },
});
