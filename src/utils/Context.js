import { useReducer, createContext } from "react";
import { myState } from "./reducers/reducer";

// initial state
const initialState = {
  account: "",
  welcome: "Welcome to the Shifumi!"
};

// create context
const Context = createContext({});

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(myState), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };