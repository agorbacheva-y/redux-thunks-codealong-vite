import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { FetchTodosButton } from "./components/FetchTodosButton";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { TodoList } from "./components/TodoList";
import { todos } from "./reducers/todos";
import { ui } from "./reducers/ui";
import Card from "./lib/Card";

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
      <Card 
        title="title" 
        secondaryText="secondary title" 
        thumbnailUrl="https://picsum.photos/200/300" 
      />
    </Provider>
  );
};
