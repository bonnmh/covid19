import {
  homeActions,
  homeReducer,
  homeTypes,
  homeProvider,
  homeSelectors,
} from './home';

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
const selectors = {
  home: homeSelectors,
};
export {rootReducer, types, actions, providers, selectors};
