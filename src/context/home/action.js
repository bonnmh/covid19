const Types = {
  HOME_ACTION: 'HOME_ACTION',
  SET_LOAD_DATA: 'SET_LOAD_DATA',
};

const Actions = {
  setHome: (params) => ({
    type: Types.HOME_ACTION,
    payload: params,
  }),
  setLoadData: (params) => ({
    type: Types.SET_LOAD_DATA,
    payload: params,
  }),
};

export {Types, Actions};
