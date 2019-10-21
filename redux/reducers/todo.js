const initialState = {
  done: [],
  todo: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      const task = action.payload
      task.created = new Date()
      return { ...state, todo: [...state.todo, task] }
    case 'UPDATE_TODO':
      let 
        { to,from } = action.payload,
        data = state.todo.slice()
      data.splice(to,0, data.splice(from,1)[0])
      return {...state, todo: data}
    case 'ADD_DONE':
      const done = action.payload
      done.finished = new Date()
      return { ...state, 
        todo: state.todo.filter(item => item !== action.payload),
        done: [...state.todo, done]
      }
    case 'RESET_TODO':
      return {...state, todo: [], done: []}
  }
  return state
}