import { useDispatch } from "react-redux";
import { fetchTodos } from "../reducers/todos";

export const FetchTodosButton = () => {
  const dispatch = useDispatch();

  // invoke thunk
  return <button type="button" onClick={() => dispatch(fetchTodos( ))}>Fetch todos!</button>;
};
