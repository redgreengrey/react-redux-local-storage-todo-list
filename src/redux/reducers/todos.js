let initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let newState = [
        ...state,
        {
          id: action.id,
          text: action.text,
          date: new Date().toLocaleDateString("ru"),
          completed: false
        }
      ];
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo
      )
    case 'DELETE_TODO':
      return [...state.filter(todo => todo.id !== action.id)]
    case 'CHANGE_TODO_TEXT':
      return [...state.map(todo => todo.id === action.payload.id ? {
          ...todo,
          text: action.payload.text
        }
        : todo)
      ]
    case 'CHANGE_TODO_DATE':
      return [...state.map(todo => todo.id === action.payload.id ? {
          ...todo,
          date: action.payload.date
        }
        : todo)
      ]
    default:
      return state
  }
}

export default todos
