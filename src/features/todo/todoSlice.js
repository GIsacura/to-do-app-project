import { createSlice } from "@reduxjs/toolkit";

const getLocalStorage = () =>{
  let value
  if(!localStorage.getItem("Todo's")){
    value = []
  }else{
    value = JSON.parse(localStorage.getItem("Todo's"))
  }

  return value
}

const initialState = getLocalStorage()

export const todoSlider = createSlice({
  name: 'todo',
  initialState,
  reducers:{
    add: (state, action) => {
      state.push(action.payload)
    },
    complete: (state, action) => {
      state.forEach(entity => {
        if(entity.id === action.payload.id){
          entity.completed = !entity.completed
        }
      })
    },
    deleted: (state, action) => {
      const deletedIndex = state.findIndex(todo => todo.id === action.payload.id)
      state.splice(deletedIndex, 1)
    },
    edit: (state, action) => {
      state.forEach(entity => {
        if(entity.id === action.payload.todo.id){
          entity.title = action.payload.value
        }
      })
    }
  }
})

export const { add, complete, deleted, edit } = todoSlider.actions

export const entities = (state) => state.todo

export default todoSlider.reducer