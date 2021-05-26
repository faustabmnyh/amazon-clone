import React, { createContext, useContext, useReducer } from "react";

// to prepare the data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer inside of our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull indormation from the data layer
export const useStateValue = () => useContext(StateContext);
