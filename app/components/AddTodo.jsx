var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var AddTodo = React.createClass({
  onFormSubmit:function(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    var {dispatch} = this.props;
    if(todoText.length>0){
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    }else{
      this.refs.todoText.focus();
    }
  },
  render:function(){
    return(
      <div className="container_footer">
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="todoText"/>
          <button className="button expanded hollow">Add Todo</button>
        </form>
      </div>
    );
  }
});
module.exports = connect()(AddTodo) ;
