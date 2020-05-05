import React from 'react';
import { List, Segment, Image } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';

const LevelVocabulary = {
  platinum: 'Platinum Sponsor',
  gold: 'Gold Sponsor',
  silver: 'Silver Sponsor',
  bronze: 'Bronze Sponsor',
};

/**
 * sponsors presentation
 * @function SponsorsBody
 * @param {Array} sponsorlist list of sponsors with name, level, logo.
 * @returns {string} Markup of the component.
 */
const SponsorsBody = ({ sponsorlist }) => {
  const groupedSponsors = sponsorlist => {
    let result = {};
    for (const level in LevelVocabulary) {
      result[level] = sponsorlist.filter(el => el.level.token === level);
    }
    return result;
  };

  const levelList = () => {
    if (sponsorlist?.length) {
      return (
        <List>
          {Object.entries(LevelVocabulary).map(level => {
            if (sponsors[level[0]].length) {
              return (
                <List.Item
                  key={level[0]}
                  className={'sponsorlevel ' + level[0]}
                >
                  <h3>{level[0].toUpperCase()}</h3>
                  <List horizontal>
                    {sponsors[level[0]].map(item => (
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
            }
          })}
        </List>
      );
    }
    return null;
  };

  const sponsors = groupedSponsors(sponsorlist);

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
      {levelList()}
    </Segment>
  );
};

export default SponsorsBody;
