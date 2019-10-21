const initialState = {
  curTime: 0,
  usedTags: [],
  totalTags: [],
  todaysTags: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'RESET':
      return {
        ...state,
        totalTags: [],
        todaysTags: []
      }
    case 'SET_CURTIME':
      return { ...state, curTime: action.payload }
    case 'REMOVE_CURTIME':
      return { ...state, curTime: 0 }
    case 'ADD_TAG':
      return { ...state, totalTags: state.totalTags.concat(state.todaysTags) }
    case 'ADD_T_TAG':
      return { ...state,
        usedTags: [...new Set(state.usedTags
          .concat(action.payload.usedTags)
          .sort())],
        todaysTags: state.todaysTags
          .concat(action.payload.todaysTags)
      }
    case 'UPDATE_T_TAG':
      return {...state,
        todaysTags: state.todaysTags.map(i => {
          const x = action.payload.tag
          if ((i.tag === x.tag) && (i.date === x.date) && (i.hour === x.hour)) 
            return {...i, value: action.payload.value}
          return i
        }
      )}
    case 'REMOVE_T_TAG':
      return { ...state, todaysTags: state.todaysTags.filter(item => item.hours != action.payload) }
    case 'RESET_T_TAG':
      return { ...state, todaysTags: [] }
    case 'ADD_USED_TAG':
        return { ...state, usedTags: [...state.usedTags, action.payload] }
    case 'REMOVE_USED_TAG':
      return { ...state, usedTags: state.usedTags.filter(item => item !== action.payload) }
  }
  return state
}