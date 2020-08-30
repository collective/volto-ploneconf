/**
 * Faq actions.
 * @module actions/votes/votes
 */

import { GET_VOTES, VOTE, CLEAR_VOTES } from '../../constants/ActionTypes';

/**
 * Get Votes Information.
 * @function getVotes
 * @returns {Object} Votes action.
 */
export function getVotes() {
  return {
    type: GET_VOTES,
    request: {
      op: 'get',
      path: `/@votes`,
    },
  };
}

/**
 * Vote
 * @function vote
 * @param {Object} rating data.
 * @returns {Object} Votes action.
 */
export function vote() {
  return {
    type: VOTE,
    request: {
      op: 'post',
      path: `/@votes`,
      data,
    },
  };
}

/**
 * Delete group function.
 * @function clearVotes
 * @returns {Object} Votes action.
 */
export function clearVotes() {
  return {
    type: CLEAR_VOTES,
    request: {
      op: 'del',
      path: `/@votes`,
    },
  };
}
