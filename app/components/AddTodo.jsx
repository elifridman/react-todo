var React = require('react');

var AddTodo = React.createClass({
  onFormSubmit:function(e){
    e.preventDefault();
    var todo = this.refs.todo.value;
    if(todo.length>0){
      this.refs.todo.value = '';
      this.props.onAddTodo(todo);
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
module.exports = AddTodo;
