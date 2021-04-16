import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  Button,
  Divider,
  Header,
  Label,
  List,
  Segment,
} from 'semantic-ui-react';

import { getVotes, vote, clearVotes } from '~/actions';

const Voting = () => {
  const votes = useSelector((store) => store.votes);
  const dispatch = useDispatch();
  let location = useLocation();

  React.useEffect(() => {
    dispatch(getVotes(location.pathname));
  }, [dispatch, location]);

  function handleVoteClick(value) {
    dispatch(vote(location.pathname, value));
  }

  return votes?.loaded && votes?.can_vote ? ( // is store content available? (votable behavior is optional)
    <Segment className="voting">
      <Header dividing>Conference Talk Selection</Header>
      <List>
        {votes?.has_votes ? (
          <p>
            <Label>
              Average Vote
              <Label.Detail>{votes?.average_vote}</Label.Detail>
            </Label>
            <Label>
              Votes Cast
              <Label.Detail>{votes?.total_votes}</Label.Detail>
            </Label>
          </p>
        ) : (
          <List.Item>This talk has not been voted yet. Be the first!</List.Item>
        )}

        <Divider horizontal section>
          Vote
        </Divider>

        {votes?.already_voted ? (
          <List.Item>
            <List.Content>
              <List.Header>Thank you, you voted for this talk.</List.Header>
              <List.Description>
                Please see other talks and vote.
              </List.Description>
            </List.Content>
          </List.Item>
        ) : (
          <List.Item>
            <Button.Group widths="3">
              <Button color="green" onClick={() => handleVoteClick(1)}>
                Approve
              </Button>
              <Button color="blue" onClick={() => handleVoteClick(0)}>
                Don't know what to expect
              </Button>
              <Button color="red" onClick={() => handleVoteClick(-1)}>
                Decline
              </Button>
            </Button.Group>
          </List.Item>
        )}
      </List>
    </Segment>
  ) : null;
};
export default Voting;
