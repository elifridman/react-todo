var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var TodoApi = require('TodoApi');
var moment = require('moment');

var TodoApp = React.createClass({
  getInitialState:function(){
    return{
      showCompleted:false,
      searchText:'',
      todos:TodoApi.getTodos()
    }
  },
  componentDidUpdate:function(){
    TodoApi.setTodos(this.state.todos);
  },
  handleAddTodo:function(text){
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id:uuid(),
          text:text,
          completed:false,
          createdAt:moment().unix(),
          completedAt:undefined
        }
      ]
    });

  },
  handleSearch:function(showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });
  },
  handleToggle:function(id){
    var updateTodos = this.state.todos.map((todoItem)=>{
      if(todoItem['id']===id){
        todoItem['completed'] = !todoItem['completed'];
        todoItem['completedAt'] = (todoItem['completed'])?moment().unix():undefined;
      }
      return todoItem;
    });
    this.setState({
      todos:updateTodos
    });
  },
  render:function(){
    var {todos,showCompleted,searchText} = this.state;
    var filteredTodos = TodoApi.filterTodos(todos,showCompleted,searchText);
    return(
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className = "row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
