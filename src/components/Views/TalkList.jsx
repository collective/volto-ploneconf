import React from 'react';
import { Container, Segment, Label, Image } from 'semantic-ui-react';
import { Helmet } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import { searchContent } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';

const TalkListView = ({ content }) => {
  const talks = useSelector(
    (state) => state.search.subrequests.conferencetalks?.items,
  );
  const dispatch = useDispatch();

  const color_mapping = {
    Beginner: 'green',
    Advanced: 'yellow',
    Professional: 'red',
  };

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

  return (
    <Container id="page-document">
      <h1 className="documentFirstHeading">{content.title}</h1>
      {content.description && (
        <p className="documentDescription">{content.description}</p>
      )}
      {talks &&
        talks.map((item) => (
          <Segment padded clearing>
            <h2>
              <Link to={item['@id']} title={item['@type']}>
                {item.type_of_talk?.title || item.type_of_talk?.token}:{' '}
                {item.title}
              </Link>
            </h2>
            <p>
              {item.audience.map((item) => {
                let audience = item.title || item.token;
                let color = color_mapping[audience] || 'green';
                return (
                  <Label key={audience} color={color} tag>
                    {audience}
                  </Label>
                );
              })}
            </p>
            {item.image && (
              <Image
                src={flattenToAppURL(item.image.scales.preview.download)}
                size="small"
                floated="right"
                alt={content.image_caption}
                avatar
              />
            )}
            {item.description && <p>{item.description}</p>}
          </Segment>
        ))}
    </Container>
  );
};

export default TalkListView;
