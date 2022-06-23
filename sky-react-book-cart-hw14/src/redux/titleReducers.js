const initialState = {
    valueUser: '',
}

const titleReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ONCHANGE':
      return {
        ...state,
        valueUser: action.value,
    }
    default:
      return state
  }
}
export default titleReducer