var $ = require('jquery');
module.exports = {
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
