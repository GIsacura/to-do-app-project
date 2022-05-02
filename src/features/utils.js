const getLocalStorage = () =>{
  let value
  if(!localStorage.getItem("Todo's")){
    value = []
  }else{
    value = JSON.parse(localStorage.getItem("Todo's"))
  }

  return value
}

const initialValue = getLocalStorage()

export const mac = (type, ...argNames) => (...args) => {
  const action = { type }
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index]
  })
  return action // retorna un action { type:, payload:}
}

export const reduceReducers = (...reducers) => (state, action) => (
  reducers.reduce((acc, el) => el(acc, action), state)
)

export const makeEntitiesReducer = actions => (state = initialValue, action) =>{
  switch(action.type){
    case actions[0]:{
      return state.concat({...action.payload})
    }
    case actions[1]: {
      const newEntities = state.map(entity => {
        if(entity.id === action.payload.id){
          return { ...entity, completed: !entity.completed }
        }
        return entity
      })
      return newEntities
    }
    case actions[2]: {
      const newEntities = [...state]
      const deletedIndex = state.findIndex(todo => todo.id === action.payload.id)
      newEntities.splice(deletedIndex, 1)
      return newEntities
    }
    case actions[3]: {
      const newEntities = state.map(entity => {
        if(entity.id === action.payload.todo.id){
          return { ...entity, title: action.payload.value }
        }
        return entity
      })
      return newEntities
    }
    default: {
      return state
    }
  }
}

export const makeSetReducer = actions => (state = 'all', action) => {
  switch(action.type){
    case actions[0]: {
      return action.payload
    }
    default: {
      return state
    }
  }
}