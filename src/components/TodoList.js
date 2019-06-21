import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { DeleteTodo, ToggleComplete } from "../actions/actions";

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  const todosList = todos.map(todo => {
    return (
      <Todo
        key={todo.id}
        todoDetails={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    );
  });

  return <div className="row">{todosList}</div>;
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleComplete: todoId => {
    dispatch(ToggleComplete(todoId));
  },
  deleteTodo: todoId => {
    dispatch(DeleteTodo(todoId));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
