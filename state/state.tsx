import React, { useReducer, useContext, createContext, FC } from 'react'

/**
 * @description Module that contains the code associated to the
 * application state
 */

/**
 * @description Code block contains the interfaces for state
 */

interface AppStateI {
  history: {
    numberOfVisibleMissions: number
  }
}

type AppActionType = 'INCREASE_VISIBLE_MISSIONS';

interface ActionI {
  type: AppActionType
  payload: number
}

/**
 * @description Default value for the application state
 */

const defaultAppState: AppStateI = {
  history: {
    numberOfVisibleMissions: 20
  }
}

/**
 * @description Create both the state and dispatch contexts
 */
const AppStateContext = createContext<AppStateI>(defaultAppState);
const AppDispatchContext = createContext<React.Dispatch<ActionI>>(() => {});

/**
 * @description Global application reducer; this of course can be refactored to
 * handle actions for a given page/route
 */
const reducer: React.Reducer<AppStateI, ActionI> = (state, action) => {
  switch (action.type) {
    case 'INCREASE_VISIBLE_MISSIONS':
      const { payload } = action;
      return { ...state, history: { numberOfVisibleMissions: payload } };
    default:
      return state;
  };
}

/**
 * @description Wrapper for using within App.js -- avoids having to import both
 * providers and thus, helps keep low level state code out of app.js (example
 * the amount of dispatchers/reducers used changes)
 */
export const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultAppState);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
};

/**
 * @description Mini hooks that can be imported within the page components in the app;
 * this helps avoid having to import both the context and useContext hook
 * within the components that use it
 */
export const useApp = () => useContext(AppStateContext);
export const useAppDispatch = () => useContext(AppDispatchContext);