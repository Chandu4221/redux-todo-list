import React from "react";
import { connect } from "react-redux";

const TodosCounter = props => {
  return (
    <div className="row mt-2">
      <div className="col-md-12">
        <div className="alert alert-info">
          {props.todos.length
            ? `Total No of Todos ${props.todos.length}`
            : `Horray No Todos!!!`}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});
export default connect(mapStateToProps)(TodosCounter);
