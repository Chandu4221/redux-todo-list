export const AddTodo = todo => ({
  type: "ADD_TODO",
  payload: todo
});

export const DeleteTodo = todoId => ({
  type: "DELETE_TODO",
  payload: todoId
});

export const ToggleComplete = todoId => ({
  type: "TOGGLE_COMPLETE",
  payload: todoId
});
