import { createStore, applyMiddleware } from 'redux'

//支持异步action
import thunk from 'redux-thunk'

//总的reducer
import reducer from './reducers'

//redux调试工具，配合Redux DevTools（chrome扩展）使用
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)