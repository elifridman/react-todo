var $ = require('jquery');
module.exports = {
  setTodos:function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos',JSON.stringify(todos));
      return todos;
    }
  },
  getTodos:function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }
  return ($.isArray(todos))?todos:[];
},
  filterTodos:function(todos,showCompleted,searchText){
    /*filterd by show completed*/
    var filteredTodos = todos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });
    /*filtered by search text*/
    if(searchText!==""){
      var searchText = searchText.toLowerCase();
      filteredTodos = filteredTodos.filter((todo)=>{
        return (todo['text'].toLowerCase().indexOf(searchText)>=0)?true:false;
      });
    }

    /*filtered non-compleated first*/
    filteredTodos.sort((a,b)=>{
      if (!a.completed && b.completed) {
       return -1;
     } else if (a.completed && !b.completed) {
       return 1;
     } else {
       return 0;
     }
    });

    return filteredTodos;
  }
}
