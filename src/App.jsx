import { useState } from 'react'
import TodoItem from './components/TodoItem'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { useSelector, useDispatch } from 'react-redux'
import { selectedTodos } from './features/filter/filterSlice'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  width: 100%;
`

const AppContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  const todos = useSelector(selectedTodos)

  return (
    <AppContainer>
      <Title>Todo's App</Title>
      <TodoInput/>
      {todos.length > 0 &&
        <TodoList>
          {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
        </TodoList>
      }
    </AppContainer>
  )
}

export default App
