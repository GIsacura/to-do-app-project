import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set } from '../features/filter/filterSlice';
import { add } from '../features/todo/todoSlice';
import styled from 'styled-components';

const InputContainer = styled.section`
  width: 100%;
`

const Input = styled.input`
  width: 70%;
  height: 30px;
  font-size: 2.5rem;
  text-align: center;

  :focus{
    outline: none;
  }
`
const SubmitButton = styled.button`
  width: auto;
  height: 34px;
  font-size: 1.5rem;
`

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
`

const ButtonContainer = styled.section`
  display: flex;
  justify-content: center;
`

const TodoInput = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const submit = e => {
    e.preventDefault()
    if(!value.trim()){
      return
    }

    const id = Math.random().toString(36)
    const todo = { title: value, completed: false, id }
    dispatch(add(todo))
    setValue('')

    // if(status.loading === 'pending'){
    //   return <p>Cargando...</p>
    // }
    // if(status.loading === 'rejected'){
    //   return <p>{status.error}</p>
    // }
  }
  return (
    <InputContainer>
      <Form onSubmit={submit}>
        <Input placeholder='Insert a task' type='text' value={value} onChange={e => setValue(e.target.value)}/>
        <SubmitButton type='submit'>Send</SubmitButton>
      </Form>
      <ButtonContainer>
        <button onClick={() => dispatch(set('all'))}>All</button>
        <button onClick={() => dispatch(set('complete'))}>Completed</button>
        <button onClick={() => dispatch(set('incomplete'))}>Incompleted</button>
        <button onClick={() => localStorage.setItem("Todo's",JSON.stringify(state.todo))}>Save</button>
      </ButtonContainer>
    </InputContainer>
  );
};

export default TodoInput;