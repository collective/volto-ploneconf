/**
 * Sponsors component.
 * @module components/theme/Footer/Sponsors
 */

import React from 'react';
import { searchContent } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Container, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FormattedMessage, defineMessages } from 'react-intl';
import { getQueryStringResults } from '@plone/volto/actions';

/**
 * Component to display the sponsors.
 * @function Sponsors
 * @returns {string} Markup of the component
 */

const Sponsors = () => {
  // get / listen search result from store
  const querystringResults = useSelector(
    state => state.querystringsearch.subrequests,
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    const options = {
        query: [
          {
            i: 'portal_type',
            o: 'plone.app.querystring.operation.selection.any',
            v: ['sponsor']
          }
        ]
      };
    dispatch(
      getQueryStringResults('/', options, 'sponsors'),
    );
  }, [dispatch]);

  const results =
    querystringResults['sponsors'] && querystringResults['sponsors'].items || [];

  return (
    <Segment vertical padded>
      <Container>
        <Segment basic>
          <h3>We ❤ our sponsors</h3>
          <ul>
            {results &&
              results.map(sponsor => (
                <li key={sponsor['@id']}>
                  <Link to={sponsor['@id']}>
                    {sponsor.title} <b>{sponsor.level?.title}</b>
                  </Link>
                </li>
              ))}
          </ul>
        </Segment>
      </Container>
    </Segment>
  );
};

// Sponsors.propTypes = {
//   piep: PropTypes.string.isRequired,
// };

export default Sponsors;
