import { combineReducers } from "redux";
import { mac, makeSetReducer, makeEntitiesReducer } from "./utils";

// Action creators
export const setComplete = mac('todo/complete', 'payload')
export const setDelete = mac('todo/delete', 'payload')
export const setEdit = mac('todo/edit', 'payload')
export const setFilter = mac('filter/set', 'payload')
// Action creators

const filterReducer = makeSetReducer(['filter/set'])

const entitiesReducer = makeEntitiesReducer(['todo/add', 'todo/complete', 'todo/delete', 'todo/edit'])

export const todosReducer = combineReducers({
  entities: entitiesReducer,
  filter: filterReducer,
})

export const selectedTodos = (state) => {
  const { entities, filter } = state.todos

  if(filter === 'complete'){
    return entities.filter(todo => todo.completed)
  }

  if(filter === 'incomplete'){
    return entities.filter(todo => !todo.completed)
  }

  return entities
}
