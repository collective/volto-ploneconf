/**
 * Sponsors component.
 * @module components/theme/Footer/Sponsors
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import { compose } from 'redux';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

import { getQueryStringResults } from '@plone/volto/actions';

import SponsorsBody from './SponsorsBody';

const toSearchOptions = {
  query: [
    {
      i: 'portal_type',
      o: 'plone.app.querystring.operation.selection.any',
      v: ['sponsor'],
    },
  ],
};

/**
 * Component to display the sponsors.
 * @class Sponsors
 * @extends Component
 */

class Sponsors extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    getQueryStringResults: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        '@id': PropTypes.string,
        '@type': PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    items: [],
  };

  /**
   * Component will mount
   * @method componentWillMount
   * @returns {undefined}
   */
  UNSAFE_componentWillMount() {
    // call action getQueryStringResults
    this.props.getQueryStringResults('/', {...toSearchOptions, fullobjects: 1}, 'sponsors');
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const sponsorlist = this.props.items;
    return (
      <>
       <SponsorsBody sponsorlist={sponsorlist} />
      </>
  )}
}

export default compose(
  injectIntl,
  connect(
    state => ({
      // TODO: why is state.querystringsearch.subrequests.sponsors undefined?
      items: state.querystringsearch.subrequests.sponsors?.items || [],
    }),
    { getQueryStringResults },
  ),

  asyncConnect([
    {
      key: 'querystringsearch',
      promise: ({ store: { dispatch } }) =>
        dispatch(
          getQueryStringResults(
            '/',
            {...toSearchOptions, fullobjects: 1},
            'sponsors'
          ),
        ),
    },
  ]),

)(Sponsors);
