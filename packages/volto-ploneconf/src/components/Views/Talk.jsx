import {
  Container as SemanticContainer,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';
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
      <Segment clearing>
        {content.speaker && <Header dividing>{content.speaker}</Header>}
        <p>{content.company || content.website}</p>
        {content.email && (
          <p>
            Email: <a href={`mailto:${content.email}`}>{content.email}</a>
          </p>
        )}
        <Image
          src={flattenToAppURL(content.image?.scales?.preview?.download)}
          size="small"
          floated="right"
          alt={content.speaker}
          avatar
        />
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
