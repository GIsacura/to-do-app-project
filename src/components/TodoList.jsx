import React from 'react';
import styled from 'styled-components'

const TodosContainer = styled.section`
  width: 70%;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 50px;
  padding: 0 10px;
`

const TodoList = ({children}) => {
  return (
    <TodosContainer>
      {children}
    </TodosContainer>
  );
};

export default TodoList;