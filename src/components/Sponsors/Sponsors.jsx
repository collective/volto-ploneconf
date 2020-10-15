import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Segment, List, Image } from 'semantic-ui-react';
import { keys, isEmpty } from 'lodash';

import { flattenToAppURL } from '@plone/volto/helpers';
import { searchContent } from '@plone/volto/actions';

const Sponsors = () => {
  const dispatch = useDispatch();
  const searchRequests = useSelector(
    (store) => store.search.subrequests.sponsors,
  );

  const groupedSponsorsByLevel = (array) =>
    array.reduce((obj, item) => {
      obj[item.level.token] = obj[item.level.token]
        ? obj[item.level.token].push(item)
        : [item];
      return obj;
    }, {});
  const sponsors = groupedSponsorsByLevel(searchRequests?.items || []);

  React.useEffect(() => {
    dispatch(
      searchContent(
        '/',
        {
          portal_type: ['sponsor'],
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
        <h3 className="subheadline">We ❤ our sponsors</h3>
      </div>
      <List>
        {keys(sponsors).map((level) => {
          return (
            <List.Item key={level} className={'sponsorlevel ' + level}>
              <h3>{level.toUpperCase()}</h3>
              <List horizontal>
                {sponsors[level].map((item) => (
                  <List.Item key={item['UID']} className="sponsor">
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
