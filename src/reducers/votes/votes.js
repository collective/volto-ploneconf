/**
 * Groups reducer.
 * @module reducers/votes/votes
 */

import { GET_VOTES, VOTE, CLEAR_VOTES } from '../../constants/ActionTypes';

const initialState = {
  vote: {
    loaded: false,
    loading: false,
    error: null,
  },
  get: {
    loaded: false,
    loading: false,
    error: null,
  },
  clear: {
    loaded: false,
    loading: false,
    error: null,
  },
};

/**
 * Get request key
 * @function getRequestKey
 * @param {string} actionType Action type.
 * @returns {string} Request key.
 */
function getRequestKey(actionType) {
  return actionType.split('_')[0].toLowerCase();
}

/**
 * Groups reducer.
 * @function votes
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default function votes(state = initialState, action = {}) {
  switch (action.type) {
    case `${VOTE}_PENDING`:
    case `${GET_VOTES}_PENDING`:
    case `${CLEAR_VOTES}_PENDING`:
      return {
        ...state,
        [getRequestKey(action.type)]: {
          loading: true,
          loaded: false,
          error: null,
        },
      };
    case `${VOTE}_SUCCESS`:
    case `${GET_VOTES}_SUCCESS`:
    case `${CLEAR_VOTES}_SUCCESS`:
      return {
        ...state,
        [getRequestKey(action.type)]: {
          loading: false,
          loaded: true,
          error: null,
        },
      };
    case `${VOTE}_FAIL`:
    case `${GET_VOTES}_FAIL`:
    case `${CLEAR_VOTES}_FAIL`:
      return {
        ...state,
        [getRequestKey(action.type)]: {
          loading: false,
          loaded: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
