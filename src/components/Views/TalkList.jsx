import React from 'react';
import { Container, Segment, Label, Image } from 'semantic-ui-react';
import { Helmet } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import { searchContent } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';

const TalkListView = (props) => {
  const { content } = props;
  const searchRequests = useSelector(
    (store) => store.search.subrequests.talklist,
  );
  const dispatch = useDispatch();
  const results = searchRequests?.items;

  const color_mapping = {
    Beginner: 'green',
    Advanced: 'yellow',
    Professional: 'red',
  };

  React.useEffect(() => {
    dispatch(
      searchContent(
        content['@id'],
        {
          portal_type: ['talk'],
          fullobjects: true,
        },
        'talklist',
      ),
    );
  }, [dispatch]);

  return (
    <Container className="view-wrapper">
      <Helmet title={content.title} />
      <article id="content">
        <header>
          <h1 className="documentFirstHeading">{content.title}</h1>
          <p className="documentDescription">{content.description}</p>
        </header>
        <section id="content-core">
          {results &&
            results.map((item) => (
              <Segment padded clearing>
                <h2>
                  <Link to={item['@id']}>
                    {item.type_of_talk.title}: {item.title}
                  </Link>
                </h2>
                {item.audience?.map((item) => {
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
                {item.description && (
                  <Segment basic className="content-area">
                    {item.description}
                  </Segment>
                )}
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
