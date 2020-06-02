import {homeActions, homeReducer, homeTypes, homeProvider} from './home';

const rootReducer = {
  home: homeReducer,
};
const types = {
  home: homeTypes,
};
const actions = {
  home: homeActions,
};
const providers = {
  home: homeProvider,
};
export {rootReducer, types, actions, providers};
