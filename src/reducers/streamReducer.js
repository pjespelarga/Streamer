import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../actions/types';
import _ from 'lodash';

const streamReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload };
    case CREATE_STREAM:
      return { ...state, [payload.id]: payload };
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case DELETE_STREAM:
      return _.omit(state, payload);

    default:
      return state;
  }
};

export default streamReducer;
