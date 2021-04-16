/**
 * Faq actions.
 * @module actions/votes/votes
 */

import { GET_VOTES, VOTE, CLEAR_VOTES } from '../../constants/ActionTypes';

/**
 * Get Votes Information
 * @function getVotes
 * @returns {Object} Votes action.
 */
export function getVotes(url) {
  return {
    type: GET_VOTES,
    request: {
      op: 'get',
      path: `${url}/@votes`,
    },
  };
}

/**
 * Vote
 * @function vote
 * @param {Object} rating data.
 * @returns {Object} Votes action.
 */
export function vote(url, vote) {
  if ([-1, 0, 1].includes(vote)) {
    return {
      type: VOTE,
      request: {
        op: 'post',
        path: `${url}/@votes`,
        data: { rating: vote },
      },
    };
  }
}

/**
 * Delete votes of an item
 * @function clearVotes
 * @returns {Object} Votes action.
 */
export function clearVotes(url) {
  return {
    type: CLEAR_VOTES,
    request: {
      op: 'del',
      path: `${url}/@votes`,
    },
  };
}
