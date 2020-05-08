/**
 * Sponsors component.
 * @module components/Sponsors/Sponsors
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
   * Default (values of) properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    items: [],
  };

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // call action getQueryStringResults
    this.props.getQueryStringResults(
      '/',
      { ...toSearchOptions, fullobjects: 1 },
      'sponsors',
    );
  }

  /**
   * Component did update
   * @method componentDidUpdate
   * @param {Object} prevProps Previous properties
   * @returns {undefined}
   *
   * Update component when a new sponsor is created / deleted / updated.
   * Two steps are necessary:
   * - subscription of a value / of values in store that reflects the fact that a new sponsor is created / deleted / updated.
   * - call search action on property change; do it here in componentDidUpdate
   */
  componentDidUpdate(prevProps) {
    if (
      // content type instance created and instance is sponsor
      (this.props.subscribedValueContent.create.loaded &&
        this.props.subscribedValueContent.data['@type'] === 'sponsor' &&
        this.props.subscribedValueContent !==
          prevProps.subscribedValueContent) ||
      // content pasted in /contents
      (this.props.subscribedValueClipboard.request.loaded &&
        this.props.subscribedValueClipboard !==
          prevProps.subscribedValueClipboard) ||
      // content deleted
      (this.props.subscribedValueContent.delete.loaded &&
        this.props.subscribedValueContent !==
          prevProps.subscribedValueContent) ||
      // content updated
      (this.props.subscribedValueContent.update.loaded &&
        this.props.subscribedValueContent !== prevProps.subscribedValueContent)
    ) {
      // then call action getQueryStringResults
      this.props.getQueryStringResults(
        '/',
        { ...toSearchOptions, fullobjects: 1 },
        'sponsors',
      );
    }
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return <SponsorsBody sponsorlist={this.props.items} />;
  }
}

export default connect(
  state => ({
    items: state.querystringsearch.subrequests.sponsors?.items || [],
    // subsription of something in store that is updated on creation of a sponsor
    // see docstring componentDidUpdate
    subscribedValueContent: state.content,
    subscribedValueClipboard: state.clipboard,
  }),
  { getQueryStringResults },
)(Sponsors);
