var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var AddTodo = React.createClass({
  onFormSubmit:function(e){
    e.preventDefault();
    var todo = this.refs.todo.value;
    var {dispatch} = this.props;
    if(todo.length>0){
      this.refs.todo.value = '';
      dispatch(actions.addTodo(todo));
    }else{
      this.refs.todo.focus();
    }
  },
  render:function(){
    return(
      <div className="container_footer">
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="todo"/>
          <button className="button expanded hollow">Add Todo</button>
        </form>
      </div>
    );
  }
});
module.exports = connect()(AddTodo) ;
