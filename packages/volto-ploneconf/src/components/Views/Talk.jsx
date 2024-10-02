import { isEmpty } from 'lodash';
import {
  Container as SemanticContainer,
  Grid,
  Header,
  Image,
  Label,
  Segment,
} from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Component, UniversalLink } from '@plone/volto/components';
import { When } from '@plone/volto/components/theme/View/EventDatesInfo';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import config from '@plone/volto/registry';

const TalkView = (props) => {
  const { content } = props;
  const Container =
    config.getComponent({ name: 'Container' }).component || SemanticContainer;
  const color_mapping = {
    beginner: 'green',
    advanced: 'yellow',
    professional: 'purple',
  };
  return (
    <Container id="view-wrapper talk-view">
      <h1 className="documentFirstHeading">
        <span className="type_of_talk">{content.type_of_talk.title}: </span>
        {content.title}
      </h1>
      {content.description && (
        <p className="documentDescription">{content.description}</p>
      )}
      <Segment floated="right">
        {content.image?.scales && (
          <Image
            src={flattenToAppURL(content.image?.scales?.preview?.download)}
            size="medium"
            alt={content.title}
          />
        )}
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
        {content.room && (
          <>
            <Header dividing sub>
              Where
            </Header>
            <p>{content.room.title}</p>
          </>
        )}
        {content.audience && (
          <>
            <Header dividing sub>
              Audience
            </Header>
            {content.audience?.map((item) => {
              let color = color_mapping[item.token] || 'green';
              return (
                <Label key={item.token} color={color}>
                  {item.title}
                </Label>
              );
            })}
          </>
        )}
      </Segment>
      <div dangerouslySetInnerHTML={{ __html: content.details.data }} />
      <Segment clearing>
        <Header dividing>Speaker</Header>
        {content.speaker?.length > 0 && (
          <Grid>
            <Grid.Row columns={5}>
              {content.speaker.map((el) => (
                <Grid.Column>
                  <UniversalLink href={el['@id']}>
                    {isEmpty(el.image_scales) ? (
                      <img
                        src={
                          config.getComponent({
                            name: 'DefaultImage',
                            dependencies: ['listing', 'summary'],
                          }).component || DefaultImageSVG
                        }
                        alt={el.title}
                        className="ui image"
                      />
                    ) : (
                      <Component
                        componentName="PreviewImage"
                        item={el}
                        image_field={isEmpty(el.image_scales) ? null : 'image'}
                        showDefault={true}
                        alt={el.title}
                        responsive={true}
                        className="ui image"
                      />
                    )}
                    <div>{el.title}</div>
                  </UniversalLink>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        )}
      </Segment>
    </Container>
  );
};
export default TalkView;
