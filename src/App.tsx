import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoItem from './Components/ToDoItem';
import React, { useState } from 'react';

export interface IToDo {
  id: string,
  task: string,
  status: string,
  index: number
}

function App() {


  const [toDoList, setToDoList] = useState<IToDo[]>([])
  const [inputTask, setInputTask] = useState('')

  function handleSubmit(e:React.FormEvent<EventTarget>) {
    e.preventDefault()
    setToDoList([...toDoList, {
      id: Math.random().toString(16).substring(2, 10),
      task: inputTask,
      status: '',
      index: 0
    }])
    setInputTask('')
  }

  function handleChange(e:React.ChangeEvent<EventTarget>) {
    if(e.target instanceof HTMLInputElement) {
      setInputTask(e.target.value)
    }
  }

  function removeTask(id: string) {
    setToDoList(toDoList.filter(item => item.id !== id))
  }

  return (
    <div className="app-container vh-100 w-100 d-flex align-items-center justify-content-center flex-column">

    <h3>Todo App</h3>
    <form className="d-flex align-items-center mb-3" onSubmit={handleSubmit}>
      <label className="form-group me-3 mb-0">
        <input type="text" className="form-control" placeholder="ввести задачу" onChange={handleChange} value={inputTask} />
      </label>

      <button type="submit" className="btn btn-primary me-3" disabled={!inputTask}>
        Сохранить
      </button>

      <button type="reset" className="btn btn-warning" disabled={!inputTask} onClick={() => setInputTask('')} >
        Очистить
      </button>
    </form>

    <div className="table-wrapper">
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>№</th>
            <th>Задача</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>

        <tbody>
          
          {toDoList.map((item, index) => (
            <ToDoItem key={item.id} {...item} index={index + 1} remove={removeTask} />
            ))}

        </tbody>
      </table>
    </div>
  </div>
  );
}

export default App;
