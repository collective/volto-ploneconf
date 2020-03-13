/**
 * Sponsors component.
 * @module components/theme/Footer/Sponsors
 */

import React from 'react';
import { searchContent } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Container, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

/**
 * Component to display the sponsors.
 * @function Sponsors
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */

const Sponsors = props => {
  const searchSubrequests = useSelector(state => state.search);
  const dispatch = useDispatch();
  const results = searchSubrequests?.items;

  React.useEffect(() => {
    dispatch(
      searchContent('/', {
        sort_on: 'created',
        metadata_fields: '_all',
        portal_type: ['sponsor'],
      }),
    );
  }, [dispatch]);

  return (
    <Segment vertical padded>
      <Container>
        <Segment basic>
          <h3>We ❤ our sponsors</h3>
          <ul>
            {results &&
              results.map(sponsor => (
                <li key={sponsor['@id']}>
                  <Link to={sponsor['@id']}>{sponsor.title}</Link>
                </li>
              ))}
          </ul>
        </Segment>
      </Container>
    </Segment>
  );
};

export default Sponsors;
