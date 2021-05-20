import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from '../../js/reducer'

const middlewares = [
  thunk
]

/**
 * 创建store
 */
export default createStore(reducers,applyMiddleware(...middlewares))


