import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Segment, List, Image } from 'semantic-ui-react';
import { keys, isEmpty } from 'lodash';

import { flattenToAppURL } from '@plone/volto/helpers';
import { searchContent } from '@plone/volto/actions';

const groupedSponsorsByLevel = (array = []) =>
  array.reduce((obj, item) => {
    let token = item.level?.token || 'bronze';
    obj[token] ? obj[token].push(item) : (obj[token] = [item]);
    return obj;
  }, {});

const Sponsors = () => {
  const dispatch = useDispatch();
  const sponsors = useSelector((state) =>
    groupedSponsorsByLevel(state.search.subrequests.sponsors?.items),
  );

  React.useEffect(() => {
    dispatch(
      searchContent(
        '/',
        {
          portal_type: ['sponsor'],
          review_state: 'published',
          fullobjects: true,
        },
        'sponsors',
      ),
    );
  }, [dispatch]);

  return !isEmpty(sponsors) ? (
    <Segment
      basic
      textAlign="center"
      className="sponsors"
      aria-label="Sponsors"
      inverted
    >
      <div className="sponsorheader">
        <h3 className="subheadline">SPONSORS</h3>
      </div>
      <List>
        {keys(sponsors).map((level) => {
          return (
            <List.Item key={level} className={'sponsorlevel ' + level}>
              <h3>{level.toUpperCase()}</h3>
              <List horizontal>
                {sponsors[level].map((item) => (
                  <List.Item key={item['@id']} className="sponsor">
                    {item.logo ? (
                      // TODO remove attributes "as" and "href" before creating git tag
                      <Image
                        className="logo"
                        as="a"
                        href={item.url}
                        target="_blank"
                        src={flattenToAppURL(item.logo.scales.preview.download)}
                        size="small"
                        alt={item.title}
                        title={item.title}
                      />
                    ) : (
                      <a href={item['@id']}>{item.title}</a>
                    )}
                  </List.Item>
                ))}
              </List>
            </List.Item>
          );
        })}
      </List>
    </Segment>
  ) : (
    <></>
  );
};

export default Sponsors;
