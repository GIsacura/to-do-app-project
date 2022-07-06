import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { complete, deleted, edit } from '../features/todo/todoSlice';
import styled from 'styled-components';

const Title = styled.span`
  font-size: 2rem;
`

const Todo = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`

const TodoItem = ({todo}) => {
  const [editTitle, setEditTitle] = useState(false)
  const [value, setValue] = useState(todo.title)
  const dispatch = useDispatch()

  const submitTitle = (e) =>{
    e.preventDefault()
    dispatch(edit({todo, value}))
    setEditTitle(false)
  }


  return(

    <Todo
      style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
    >
      <Title>
        {
          !editTitle
            ? <span onClick={() => dispatch(complete(todo))}>{todo.title}</span>
            :<form onSubmit={submitTitle}>
              <input value={value} onChange={(event) => setValue(event.target.value)}/>
              <button type='submit'>ok</button>
            </form>
        }
      </Title>
      <span>
        <button onClick={() => setEditTitle(!editTitle)}>edit</button>
        <button onClick={() => dispatch(deleted(todo))}>delete</button>
      </span>
    </Todo>
  )
}

export default TodoItem;