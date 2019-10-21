import { combineReducers } from 'redux'
import tagsReducer from './tags'
import todoReducer from './todo'

export default combineReducers({
  tags: tagsReducer,
  todo: todoReducer
});