var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux')
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('./store/configureStore.jsx').configure();
var todoApi = require('todoApi');

store.subscribe(()=>{
  var state = store.getState();
  console.log('new state',state);
  todoApi.setTodos(state.todos);
});
var initialTodos = todoApi.getTodos();
store.dispatch(actions.addTodos(initialTodos));
//Load css
require('style!css!sass!applicationStyles');
$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
