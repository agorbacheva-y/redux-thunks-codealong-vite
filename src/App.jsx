import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { FetchTodosButton } from "./components/FetchTodosButton";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { TodoList } from "./components/TodoList";
import { todos } from "./reducers/todos";
import { ui } from "./reducers/ui";

const reducer = combineReducers({
  ui: ui.reducer,
  todos: todos.reducer,
});

export const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingIndicator />
      <TodoList />
      <FetchTodosButton />
    </Provider>
  );
};
