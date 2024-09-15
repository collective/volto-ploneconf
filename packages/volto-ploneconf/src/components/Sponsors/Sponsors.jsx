import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Segment, Grid } from 'semantic-ui-react';
import { keys, isEmpty } from 'lodash';

import { ConditionalLink, Component } from '@plone/volto/components';
import { searchContent } from '@plone/volto/actions';

const groupedSponsorsByLevel = (array = []) =>
  array.reduce((obj, item) => {
    let token = item.level || 'bronze';
    obj[token] ? obj[token].push(item) : (obj[token] = [item]);
    return obj;
  }, {});

const Sponsors = () => {
  const dispatch = useDispatch();
  const sponsors = useSelector((state) =>
    groupedSponsorsByLevel(state.search.subrequests.sponsors?.items),
  );

  useEffect(() => {
    dispatch(
      searchContent(
        '/',
        {
          portal_type: ['sponsor'],
          review_state: 'published',
          sort_on: 'effective',
          metadata_fields: ['level', 'url'],
        },
        'sponsors',
      ),
    );
  }, [dispatch]);

  return !isEmpty(sponsors) ? (
    <Segment basic textAlign="center" className="sponsors">
      <div className="sponsorheader">
        <h2 className="subheadline">SPONSORS</h2>
      </div>
      {keys(sponsors).map((level) => {
        return (
          <div key={level} className={'sponsorlevel ' + level}>
            <h3>{level.toUpperCase()}</h3>
            <Grid centered>
              <Grid.Row centered>
                {sponsors[level].map((item) => (
                  <Grid.Column key={item['@id']} className="sponsor">
                    <ConditionalLink
                      to={item.url}
                      openLinkInNewTab={true}
                      condition={item.url}
                    >
                      <Component
                        componentName="PreviewImage"
                        item={item}
                        alt={item.title}
                        responsive={true}
                        className="ui image"
                      />
                    </ConditionalLink>
                  </Grid.Column>
                ))}
              </Grid.Row>
            </Grid>
          </div>
        );
      })}
    </Segment>
  ) : (
    <></>
  );
};

export default Sponsors;
