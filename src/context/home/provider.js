import React from 'react';
import PropTypes from 'prop-types';
import {reducer, initialState} from './reducer';
const HomeContext = React.createContext();
const HomeDispatchContext = React.createContext();

function HomeProvider({children}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <HomeContext.Provider value={state}>
      <HomeDispatchContext.Provider value={dispatch}>
        {children}
      </HomeDispatchContext.Provider>
    </HomeContext.Provider>
  );
}

HomeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function useHomeState() {
  const context = React.useContext(HomeContext);
  if (context === undefined) {
    throw new Error('useContactsState must be used within a NewPostProvider');
  }
  return context;
}

function useHomeDispatch() {
  const context = React.useContext(HomeDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useNewContactsDispatch must be used within a NewPostProvider',
    );
  }
  return context;
}

export {HomeProvider, useHomeState, useHomeDispatch};
