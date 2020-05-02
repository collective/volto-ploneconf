import React from 'react';
import { List, Segment, Image } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
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
                <List.Item key={level[0]} className="sponsorlevel">
                  <h3>{level[0].toUpperCase()}</h3>
                  <List horizontal>
                    {sponsors[level[0]].map(item => (
                      <List.Item key={item['UID']} className="sponsor">
                        {item.logo ? (
                          <Image
                            className="logo"
                            src={flattenToAppURL(
                              item.logo.scales.preview.download,
                            )}
                            size="small"
                            alt={item.title}
                            title={item.title}
                          />
                        ) : (
                          <p>{item.title}</p>
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
        <h3 className="subheadline">
          <FormattedMessage
            id="Our sponsors do support and are supported of Plone."
            defaultMessage="Our sponsors do support and are supported of Plone."
          />
        </h3>
        <h2 className="headline">
          <FormattedMessage
            id="We ❤ our sponsors"
            defaultMessage="We ❤ our sponsors"
          />
        </h2>
      </div>
      {levelList()}
    </Segment>
  );
};

export default SponsorsBody;
