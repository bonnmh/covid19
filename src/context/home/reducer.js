import {Types} from './action';

const initialState = {
  data: [],
  loadData: false,
};
function reducer(state, action) {
  switch (action.type) {
    case Types.HOME_ACTION: {
      return {...state, data: action.payload, loadData: false};
    }
    case Types.SET_LOAD_DATA: {
      return {...state, loadData: action.payload};
    }
    default:
      return initialState;
  }
}

export {reducer, initialState};
