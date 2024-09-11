import { Container as SemanticContainer } from 'semantic-ui-react';
import { DefaultView } from '@plone/volto/components';
import config from '@plone/volto/registry';

const TalkView = (props) => {
  const Container =
    config.getComponent({ name: 'Container' }).component || SemanticContainer;
  return (
    <>
      <DefaultView {...props} />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: props.content.details.data }} />
      </Container>
    </>
  );
};
export default TalkView;
