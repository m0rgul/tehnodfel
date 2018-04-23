import {FETCH_WEBSITE_DATA, FETCH_WEBSITE_DATA_SUCCESS, FETCH_WEBSITE_DATA_ERROR} from '../actions/website';

const INITIAL_STATE = {
  website: {
    data: null,
    error: null,
    loading: false
  }
};

const WEBSITE_REDUCERS = (state = INITIAL_STATE, action) => {
  // debugger;
  switch (action.type) {
    case FETCH_WEBSITE_DATA:
      return {
        ...state,
        website: {
          data: null,
          error: null,
          loading: true
        }
      };

    case FETCH_WEBSITE_DATA_SUCCESS:
      return {
        ...state,
        website: {
          data: action.payload,
          error: null,
          loading: false
        }
      };

    case FETCH_WEBSITE_DATA_ERROR:
      let error = action.payload || {
        message: action.payload.message
      };

      return {
        ...state,
        website: {
          data: null,
          error: error,
          loading: false
        }
      };

    default:
      return state;
  }
}

export default WEBSITE_REDUCERS;
