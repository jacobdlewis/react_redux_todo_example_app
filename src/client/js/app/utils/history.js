import createHistory from 'history/createBrowserHistory';

let _history = createHistory();

export default {
  bind: (history) => {
    _history = history;
  },
  push: (...args) => _history.push(...args),
  listen: (...args) => _history.listen(...args),
  replace: (...args) => _history.replace(...args)
};
