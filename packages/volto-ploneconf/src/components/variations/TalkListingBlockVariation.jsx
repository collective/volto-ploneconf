import React from 'react';
import PropTypes from 'prop-types';
import { Label, Segment } from 'semantic-ui-react';
import { ConditionalLink, Component } from '@plone/volto/components';
import { When } from '@plone/volto/components/theme/View/EventDatesInfo';
import { flattenToAppURL } from '@plone/volto/helpers';

import { isInternalURL } from '@plone/volto/helpers/Url/Url';

const TalkListingBlockVariation = ({
  items,
  linkTitle,
  linkHref,
  isEditMode,
}) => {
  let link = null;
  let href = linkHref?.[0]?.['@id'] || '';
  const color_mapping_audience = {
    beginner: 'green',
    advanced: 'yellow',
    professional: 'purple',
  };

  if (isInternalURL(href)) {
    link = (
      <ConditionalLink to={flattenToAppURL(href)} condition={!isEditMode}>
        {linkTitle || href}
      </ConditionalLink>
    );
  } else if (href) {
    link = <a href={href}>{linkTitle || href}</a>;
  }

  return (
    <>
      <div className="items">
        {items.map((item) => (
          <Segment>
            <div className="listing-item" key={item['@id']}>
              <ConditionalLink item={item} condition={!isEditMode}>
                <Component componentName="PreviewImage" item={item} alt="" />
                <div className="listing-body">
                  <When
                    start={item.start}
                    end={item.end}
                    whole_day={item.whole_day}
                    open_end={item.open_end}
                  />
                  <h3>{item.title || item.id}</h3>
                  <p>{item.speaker}</p>
                  <p>
                    {item.room && (
                      <>
                        <b>Room: </b>
                        {item.room}
                        <br />
                      </>
                    )}
                    {item.audience?.length > 0 && (
                      <>
                        <b>Audience:</b>
                        {item.audience?.map((audience) => {
                          let color =
                            color_mapping_audience[audience] || 'green';
                          return (
                            <Label key={audience} color={color}>
                              {audience}
                            </Label>
                          );
                        })}
                      </>
                    )}
                  </p>
                  <p>{item.description}</p>
                </div>
              </ConditionalLink>
            </div>
          </Segment>
        ))}
      </div>

      {link && <div className="footer">{link}</div>}
    </>
  );
};

TalkListingBlockVariation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
};

export default TalkListingBlockVariation;
