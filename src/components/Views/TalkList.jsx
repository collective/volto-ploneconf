import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Label, Segment } from 'semantic-ui-react';
import { searchContent } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';
import { flattenToAppURL } from '@plone/volto/helpers';

const TalkListView = ({ content }) => {
  const talks = useSelector(
    (state) => state.search.subrequests.conferencetalks?.items,
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      searchContent(
        '/',
        {
          portal_type: ['talk'],
          fullobjects: true,
        },
        'conferencetalks',
      ),
    );
  }, [dispatch]);

  const color_mapping = {
    Beginner: 'green',
    Advanced: 'yellow',
    Professional: 'red',
  };

  return (
    <Container id="view-wrapper talklist-view">
      <article id="content">
        <header>
          <h1 className="documentFirstHeading">{content.title}</h1>
          {content.description && (
            <p className="documentDescription">{content.description}</p>
          )}
        </header>
        <section id="content-core">
          {talks &&
            talks.map((item) => (
              <Segment padded clearing key={item.id}>
                <h2>
                  <Link to={item['@id']} title={item['@type']}>
                    {item.type_of_talk?.title || item.type_of_talk?.token}:{' '}
                    {item.title}
                  </Link>
                </h2>
                <div>
                  {item.audience.map((item) => {
                    let audience = item.title || item.token;
                    let color = color_mapping[audience] || 'green';
                    return (
                      <Label key={audience} color={color} tag>
                        {audience}
                      </Label>
                    );
                  })}
                </div>
                {item.image && (
                  <Image
                    src={flattenToAppURL(item.image.scales.preview.download)}
                    size="small"
                    floated="right"
                    alt={content.image_caption}
                    avatar
                  />
                )}
                <p>{item.description}</p>
              </Segment>
            ))}
        </section>
      </article>
    </Container>
  );
};

export default TalkListView;