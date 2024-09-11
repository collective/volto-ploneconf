import { Container as SemanticContainer } from 'semantic-ui-react';
import config from '@plone/volto/registry';

const TalkView = (props) => {
  const { content } = props;
  const Container =
    config.getComponent({ name: 'Container' }).component || SemanticContainer;
  return (
    <Container id="view-wrapper talk-view">
      <h1 className="documentFirstHeading">
        <span className="type_of_talk">{content.type_of_talk.token}: </span>
        {content.title}
      </h1>
      {content.description && (
        <p className="documentDescription">{content.description}</p>
      )}
      <div dangerouslySetInnerHTML={{ __html: content.details.data }} />
    </Container>
  );
};
export default TalkView;
