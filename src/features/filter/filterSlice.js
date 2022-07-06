import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
  name: 'filter',
  initialState: {value: 'all'},
  reducers:{
    set:(state, action) => {
      state.value = action.payload
    }
  }
})

export const {set} = filterSlice.actions;

export const selectedTodos = (state) => {

  if(state.filter.value === 'complete'){
    return state.todo.filter(todo => todo.completed)
  }

  if(state.filter.value === 'incomplete'){
    return state.todo.filter(todo => !todo.completed)
  }

  return state.todo
}

export default filterSlice.reducer