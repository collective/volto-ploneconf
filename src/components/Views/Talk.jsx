import React from 'react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Container, Image, Icon, Label, Segment } from 'semantic-ui-react';
import { Helmet } from '@plone/volto/helpers';
import { When } from '@plone/volto/components/theme/View/EventDatesInfo';

const TalkView = props => {
  const { content } = props;
  const color_mapping = {
    Beginner: 'green',
    Advanced: 'yellow',
    Professional: 'red',
  };

  return (
    <Container id="page-talk">
      <Helmet title={content.title} />
      <h1 className="documentFirstHeading">
        {content.type_of_talk.title || content.type_of_talk.token}: {content.title}
      </h1>
      {content.description && (
        <p className="documentDescription">{content.description}</p>
      )}
      {content.audience.map(item => {
        let audience = item.title || item.token;
        let color = color_mapping[audience] || 'green';
        return (
          <Label key={audience} color={color}>
            {audience}
          </Label>
        );
      })}
      {content.start && !content.hide_date && (
        <When
          start={content.start}
          end={content.end}
          whole_day={content.whole_day}
          open_end={content.open_end}
        />
      )}
      {content.details && (
        <div dangerouslySetInnerHTML={{ __html: content.details.data }} />
      )}
      <Segment clearing>
        {content.speaker && <h3>{content.speaker}</h3>}
        {content.website ? (
          <p>
            <a href={content.website}>{content.company}</a>
          </p>
        ) : (
          <p>{content.company}</p>
        )}
        {content.email && (
          <p>
            <a href={`mailto:${content.email}`}>
              <Icon name="mail" /> {content.email}
            </a>
          </p>
        )}
        {content.twitter && (
          <p>
            <a href={`https://twitter.com/${content.twitter}`}>
              <Icon name="twitter" />{' '}
              {content.twitter.startsWith('@')
                ? content.twitter
                : '@' + content.twitter}
            </a>
          </p>
        )}
        {content.github && (
          <p>
            <a href={`https://github.com/${content.github}`}>
              <Icon name="github" /> {content.github}
            </a>
          </p>
        )}
        {content.image && (
          <Image
            src={flattenToAppURL(content.image.scales.preview.download)}
            size="small"
            floated="right"
            alt={content.image_caption}
            avatar
          />
        )}
        {content.speaker_biography && (
          <div
            dangerouslySetInnerHTML={{
              __html: content.speaker_biography.data,
            }}
          />
        )}
      </Segment>
    </Container>
  );
};
export default TalkView;
