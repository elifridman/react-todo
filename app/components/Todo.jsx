var React =require('react');
var moment = require('moment');
var Todo = React.createClass({
  render:function(){
    var {id,text,completed,createdAt,completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = ()=>{
      var meassage = 'created';
      var timeStamp = createdAt;

      if(completed){
        var meassage = 'completedAt';
        var timeStamp = completedAt;
      }

      return meassage + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a')
    }
    return(
      <div className={todoClassName} onClick={()=>{
        this.props.onToggle(id);
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
module.exports = Todo;
