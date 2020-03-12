import React from 'react';
import { Container, Segment, Label, Image } from 'semantic-ui-react';
import { Helmet } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';

const TalkListView = props => {
  const { content } = props;
  const results = content.items;
  const color_mapping = {
    Beginner: 'green',
    Advanced: 'yellow',
    Professionals: 'red',
  };
  return (
    <Container className="view-wrapper">
      <Helmet title={content.title} />
      <article id="content">
        <header>
          <h1 className="documentFirstHeading">{content.title}</h1>
          {content.description && (
            <p className="documentDescription">{content.description}</p>
          )}
        </header>
        <section id="content-core">
          {results &&
            results.map(item => (
              <Segment padded>
                <h2>
                  <Link to={item['@id']} title={item['@type']}>
                    {item.type_of_talk.title}: {item.title}
                  </Link>
                </h2>
                {item.audience.map(item => {
                  let audience = item.title;
                  let color = color_mapping[audience] || 'green';
                  return (
                    <Label key={audience} color={color}>
                      {audience}
                    </Label>
                  );
                })}
                {item.image && (
                  <Image
                    src={flattenToAppURL(item.image.scales.preview.download)}
                    size="small"
                    floated="right"
                    alt={content.image_caption}
                    avatar
                  />
                )}
                {item.description && <div>{item.description}</div>}
                <Link to={item['@id']} title={item['@type']}>
                  read more ...
                </Link>
              </Segment>
            ))}
        </section>
      </article>
    </Container>
  );
};
export default TalkListView;
