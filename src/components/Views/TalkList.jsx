import React from 'react';
import { Container } from 'semantic-ui-react';
import { Helmet } from '@plone/volto/helpers';

const TalkListView = props => {
  const { content } = props;
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
      </article>
    </Container>
  )
};
export default TalkListView;