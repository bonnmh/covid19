import {StackActions, CommonActions} from '@react-navigation/native';
let _container;

function setContainer(container) {
  _container = container;
}
export const navigate = (name, params = {}, key) => {
  if (!name) {
    throw new Error('Tried to create custom push method without a componentId');
  }
  if (_container) {
    _container.dispatch({
      ...CommonActions.navigate(name, params),
      source: key,
    });
  }
};
export const reset = (routes, params = {}, key) => {
  if (!routes) {
    throw new Error('Tried to create custom push method without a componentId');
  }
  if (_container) {
    _container.dispatch({
      ...CommonActions.reset({
        index: 1,
        routes,
        params,
      }),
      source: key,
    });
  }
};
export const replace = (name, params) => {
  if (!name) {
    throw new Error('Tried to create custom push method without a componentId');
  }
  if (_container) {
    _container.dispatch({
      ...StackActions.replace(name, params),
    });
  }
};
export const push = (name, params = {}, key) => {
  if (!name) {
    throw new Error('Tried to create custom push method without a componentId');
  }
  if (_container) {
    _container.dispatch({
      ...StackActions.push(name, params),
      source: key,
    });
  }
};

function goBack() {
  _container.dispatch(CommonActions.goBack());
}

export default {
  setContainer,
  push,
  navigate,
  reset,
  goBack,
  replace,
};
