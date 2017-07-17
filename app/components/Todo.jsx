var React =require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

var Todo = React.createClass({
  render:function(){
    var {id,text,completed,createdAt,completedAt,dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = ()=>{
      var message = 'Created';
      var timestamp = createdAt;

      if(completed){
        var message = 'Completed';
        var timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
    }
    return(
      <div className={todoClassName} onClick={()=>{
        dispatch(actions.toggleTodo(id));
      }}>
      <div>
        <input type="checkbox" defaultChecked={completed}/>
      </div>
      <div>
        <p>{text}</p>
        <p className="todo_subtext">{renderDate()}</p>
      </div>
      </div>
    );
  }
});
module.exports =connect()(Todo);
