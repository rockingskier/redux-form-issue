import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { reducer as formReducer } from 'redux-form';
import { routerStateReducer } from 'redux-react-router';
import objectAssign from 'object-assign';


const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const reducers = objectAssign({}, {
  form: formReducer,
  router: routerStateReducer
});
const combinedReducers = combineReducers(reducers);


export default finalCreateStore(combinedReducers);
