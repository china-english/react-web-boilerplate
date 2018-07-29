import thunk from 'redux-thunk'; // redux 作者开发的异步处理方案 可以在action 里传入 dispatch getState
import { createStore, applyMiddleware } from 'redux'; // 引入redux createStore、中间件及compose
import { composeWithDevTools } from 'redux-devtools-extension';// devToolsEnhancer,
import reducer from '../reducers';// 引入reducers集合

// 引入redux-devtools-extension的可视化工具

// 创建一个中间件集合
const middleware = [thunk];

// 创建store
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

export default store;
