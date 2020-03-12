/**
 * Sponsors component.
 * @module components/theme/Footer/Sponsors
 */

import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

/**
 * Component to display the sponsors.
 * @function Sponsors
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Sponsors = ({ intl }) => (
  <Segment vertical padded>
    <Container>
      <Segment basic>
        <h3>We ❤ our sponsors</h3>
      </Segment>
    </Container>
  </Segment>
);

export default injectIntl(Sponsors);
