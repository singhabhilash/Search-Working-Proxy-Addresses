export default function workingProxyReducer(state = [], action) {
  console.log('action', action);
  switch (action.type) {
    case 'RECEIVE_OK_URL':
      return [...state, action.url];
    default:
      return state;
  }
}

