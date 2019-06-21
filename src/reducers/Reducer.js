const todos = [];

export const Reducer = (state = { todos: todos }, action) => {
  let newTodos = [];
  let todoIncomplete;
  switch (action.type) {
    case "ADD_TODO":
      newTodos = [...state.todos, action.payload];
      return { todos: newTodos };
    case "DELETE_TODO":
      newTodos = state.todos.filter(todo => todo.id !== action.payload);
      return { todos: newTodos };
    case "TOGGLE_COMPLETE":
      todoIncomplete = state.todos.find(todo => todo.id === action.payload);
      todoIncomplete.isCompleted = !todoIncomplete.isCompleted;
      return { todos: [...newTodos, todoIncomplete] };
    default:
      return state;
  }
};
