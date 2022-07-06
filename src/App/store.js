import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
import filterReducer from '../features/filter/filterSlice'


const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer
})

export const store = configureStore({
  reducer: rootReducer
})
// export const store = configureStore({
//   reducer: {
//     todos: todosReducer,
//   }
// })