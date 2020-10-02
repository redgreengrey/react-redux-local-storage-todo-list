import React from 'react'
import PropTypes from 'prop-types'
import './TodoList.css'
import Todo from './Todo'
import EditTodoModal from "./EditTodoModal";

const TodoList = ({todos, toggleTodo, deleteTodo}) => {
  return todos.length > 0
    ? (
      <div className="todo-list">
        <div className="todo-list__header">
          <div className="todo-list__header__item">ID</div>
          <div className="todo-list__header__item">Наименование</div>
          <div className="todo-list__header__item">Дата</div>
          <div className="todo-list__header__item">Статус</div>
          <div className="todo-list__header__item">Действия</div>
        </div>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
        <EditTodoModal/>
      </div>
    )
    : <div>no todos yet...</div>
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
