import React, {useEffect, useState} from 'react';
import { Container, List, Segment, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FormattedMessage, defineMessages } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';

// TODO translate LevelVocabulary
const LevelVocabulary = {
  'platinum': 'Platinum Sponsor',
  'gold': 'Gold Sponsor',
  'silver': 'Silver Sponsor',
  'bronze': 'Bronze Sponsor',
}


const SponsorsBody = ({sponsorlist}) => {

  const groupedSponsors = (sponsorlist) => {
    let result = {}
    for (const level in LevelVocabulary) {
      result[level] = sponsorlist.filter(el => el.level.token == level)
    };
    return result
  }

  const sponsors = groupedSponsors(sponsorlist);

  const levelList = level => {
      if (sponsors && sponsors[level[0]] !== undefined && sponsors[level[0]].length>0) {
        return (
          <List.Item key={level[0]} className="sponsorlevel">
            <h3>{level[0].toUpperCase()}</h3>
            <List horizontal>
              {sponsors[level[0]] && sponsors[level[0]].map(item => (
                <List.Item key={item['UID']} className="sponsor">
                  {item.logo && (
                    <Image
                      className="logo"
                      src={flattenToAppURL(item.logo.scales.preview.download)}
                      size="small"
                      alt={item.title}
                      title={item.level?.title + ' ' + item.title}
                    />
                  )}
                </List.Item>
              ))}
            </List>
          </List.Item>
        )}

      return null;
  }


  return (
    <Segment
      basic
      textAlign="center"
      className="sponsors"
      aria-label="Sponsors"
      inverted>
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
      <List>
        {sponsors && Object.entries(LevelVocabulary).map(level => (
          levelList(level)
        ))}
      </List>
    </Segment>
  )
}

export default SponsorsBody
