var React = require('react');
var {connect} = require('react-redux');
var Todo = require('Todo');
var todoApi = require('todoApi');

var TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if(todos.length===0){
        return(
          <p className="container_message"> Nothing To Do</p>
        );
      }
      return todoApi.filterTodos(todos, showCompleted,
        searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});
module.exports = connect(
  (state) => {
    return state;
  }
)(TodoList);
