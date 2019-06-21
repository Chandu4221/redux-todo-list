import React, { useState } from "react";
import { connect } from "react-redux";
import { AddTodo } from "../actions/actions";
import uuidv1 from "uuid/v1";

const CreateTodo = props => {
  const [todoId, setTodoId] = useState("");
  const [newTodo, setNewTodo] = useState("");

  const handleOnSubmit = e => {
    e.preventDefault();
    props.addTodo({ id: todoId, isCompleted: false, todo: newTodo });
  };

  const handleOnChange = e => {
    setTodoId(uuidv1());
    setNewTodo(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <form className="my-4" onSubmit={handleOnSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Create New Todo"
              onChange={handleOnChange}
              value={newTodo}
            />

            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(AddTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTodo);
