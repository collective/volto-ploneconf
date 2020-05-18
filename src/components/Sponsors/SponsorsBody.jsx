import React from 'react';
import { Segment, List, Image } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';

/**
 * sponsors presentation
 * @function SponsorsBody
 * @param {Array} sponsorlist list of sponsors with name, level, logo.
 * @returns {string} Markup of the component.
 */
const SponsorsBody = ({ sponsorlist }) => {
  const groupedSponsorsByLevel = array =>
    array.reduce((obj, item) => {
      obj[item.level.token] = obj[item.level.token]
        ? obj[item.level.token].push(item)
        : [item];
      return obj;
    }, {});
  const sponsors = groupedSponsorsByLevel(sponsorlist);

  return (
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
      {sponsorlist?.length && (
        <List>
          {Object.keys(sponsors).map(level => {
            return (
              <List.Item key={level} className={'sponsorlevel ' + level}>
                <h3>{level.toUpperCase()}</h3>
                <List horizontal>
                  {sponsors[level].map(item => (
                    <List.Item key={item['UID']} className="sponsor">
                      {item.logo ? (
                        // TODO remove attributes "as" and "href" before creating git tag
                        <Image
                          className="logo"
                          as="a"
                          href={item.url}
                          target="_blank"
                          src={flattenToAppURL(
                            item.logo.scales.preview.download,
                          )}
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
      )}
    </Segment>
  );
};

export default SponsorsBody;
