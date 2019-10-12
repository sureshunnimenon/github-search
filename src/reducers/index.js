const initialState = {
  userData: {},
  isFetching: false,
  isError: false
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return Object.assign({}, state, {
        isFetching: true,
        isError: false,
        userData: {}
      });
    case 'FETCHED_USER':
      return Object.assign({}, state, {
        userData: action.data,
        isError: false,
        isFetching: false
      });
    case 'RECEIVE_ERROR':
      return Object.assign({}, state, {
        isError: true,
        isFetching: false
      });

    default:
      return state;
  }
};

export default asyncReducer;
