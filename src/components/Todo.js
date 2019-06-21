import React from "react";

const Todo = ({ todoDetails, toggleComplete, deleteTodo }) => {
  console.log(todoDetails);
  return (
    <div className="col-md-12 my-1">
      <div className="row">
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex h-100 align-items-center">
                <small className="text-muted">{todoDetails.id}</small>
              </div>
            </div>
            <div className="col-md-12">
              <div className="d-flex align-items-center h-100">
                <h3> {todoDetails.todo}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <button
            className="btn btn-success btn-block mb-1"
            onClick={() => toggleComplete(todoDetails.id)}
          >
            {!todoDetails.isCompleted ? `Done` : `Not Done`}
          </button>
          <button
            className="btn btn-danger btn-block mt-1"
            onClick={() => deleteTodo(todoDetails.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
