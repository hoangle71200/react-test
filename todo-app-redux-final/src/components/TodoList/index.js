import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import React, { Component, useEffect, useRef }  from 'react';
import { useDispatch,useSelector } from 'react-redux';
import todoListSlice  from './ReduceAddtodo'
// id duy nhất
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import { addTodoSelect, todoListFilter, todoListFilterStatus } from '../../redux/selector';

export default function TodoList() {
  const [textTodo,setTexttodo] = useState('')
  const [priority,setPriority]=useState('High')
  // const refInput =useRef();

  // useEffect(()=>{
  //     refInput.current.focus();
  // })

  // lấy tùng dữ liệu trong kho chung
  const todoList =useSelector(todoListFilter)

  const dispatch =useDispatch()

  const handleAdd =()=>{
      dispatch(todoListSlice.actions.addTodo({
                      id:uuidv4(),
                      name:textTodo,
                      priority:priority,
                      complete:false}))
      setTexttodo('')
      setPriority('High')
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo=><Todo key={todo.id} name={todo.name} prioriry={todo.priority} id={todo.id} completed={todo.completed}/>)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input  value={textTodo} onChange={e => setTexttodo(e.target.value)} />
          <Select defaultValue="Medium" value={priority} onChange={value=>setPriority(value)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
