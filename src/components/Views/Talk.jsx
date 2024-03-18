import React from 'react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Container, Header, Image, Label, Segment } from 'semantic-ui-react';
import { When } from '@plone/volto/components/theme/View/EventDatesInfo';

const TalkView = ({ content }) => {
  const color_mapping = {
    beginner: 'green',
    advanced: 'yellow',
    professional: 'purple',
  };

  return (
    <Container id="view-wrapper talk-view">
      <h1 className="documentFirstHeading">
        {content.type_of_talk.title || content.type_of_talk.token}:{' '}
        {content.title}
      </h1>
      <Segment floated="right">
        {content.start && !content.hide_date && (
          <>
            <Header dividing sub>
              When
            </Header>
            <When
              start={content.start}
              end={content.end}
              whole_day={content.whole_day}
              open_end={content.open_end}
            />
          </>
        )}
        {content.audience && (
          <>
            <Header dividing sub>
              Audience
            </Header>
            <div>
              {content.audience?.map((item) => {
                let audience = item.title;
                let color = color_mapping[audience] || 'green';
                return (
                  <Label key={audience} color={color} tag>
                    {audience}
                  </Label>
                );
              })}
            </div>
          </>
        )}
      </Segment>
      {content.description && (
        <p className="documentDescription">{content.description}</p>
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
            Email: <a href={`mailto:${content.email}`}>{content.email}</a>
          </p>
        )}
        {content.twitter && (
          <p>
            Twitter:{' '}
            <a href={`https://twitter.com/${content.twitter}`}>
              {content.twitter.startsWith('@')
                ? content.twitter
                : '@' + content.twitter}
            </a>
          </p>
        )}
        {content.github && (
          <p>
            Github:{' '}
            <a href={`https://github.com/${content.github}`}>
              {content.github}
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
