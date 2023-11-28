import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { FetchTodosButton } from "./components/FetchTodosButton";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { TodoList } from "./components/TodoList";
import { todos } from "./reducers/todos";
import { ui } from "./reducers/ui";
import Card from "./lib/Card";
import styled from "styled-components";

const reducer = combineReducers({
  ui: ui.reducer,
  todos: todos.reducer,
});

// can style individual Card component; passes classname into Card
const ThinnerCard = styled(Card)`
  width: 400px;
`

export const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingIndicator />
      <TodoList />
      <FetchTodosButton />
      <ThinnerCard 
        title="title" 
        secondaryText="secondary title" 
        thumbnailUrl="https://picsum.photos/200/300" 
        coverImage="https://picsum.photos/500/500"> 
        child component
      </ThinnerCard>

      <Card title="only a title" secondaryText="secondary text" />

      <Card>child component</Card>
    </Provider>
  );
};
