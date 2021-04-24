import React, { useState } from 'react';
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
  const content = useSelector((store) => store.content.data);

  const [stateClearVotes, setStateClearVotes] = useState(0);

  React.useEffect(() => {
    dispatch(getVotes(location.pathname));
  }, [dispatch, location]);

  function handleVoteClick(value) {
    dispatch(vote(location.pathname, value));
    setStateClearVotes(0);
  }
  function handleClearVotes() {
    if (stateClearVotes === 1) {
      dispatch(clearVotes(location.pathname));
    }
    // count count counts to 2
    let counter = stateClearVotes < 2 ? stateClearVotes + 1 : 2;
    console.log('counter', counter);
    setStateClearVotes(counter);
  }

  return votes?.loaded && votes?.can_vote ? ( // is store content available? (votable behavior is optional)
    <Segment className="voting">
      <Header dividing>Conference Talk and Training Selection</Header>
      <List>
        {votes?.has_votes ? (
          <p>
            <Label.Group size="medium">
              <Label color="olive" ribbon>
                Average vote for this {content.type_of_talk?.title}: {votes?.average_vote}
                <Label.Detail>( Votes Cast {votes?.total_votes} )</Label.Detail>
              </Label>
            </Label.Group>
          </p>
        ) : null}

        <Divider horizontal section>
          Vote
        </Divider>

        {votes?.already_voted ? (
          <List.Item>
            <List.Content>
              <List.Header>
                You voted for this {content.type_of_talk?.title}.
              </List.Header>
              <List.Description>
                Please see more interesting talks and vote.
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
              <Button color="orange" onClick={() => handleVoteClick(-1)}>
                Decline
              </Button>
            </Button.Group>
          </List.Item>
        )}
        {votes?.can_clear_votes && votes?.has_votes ? (
          <>
            <Divider horizontal section color="red">
              Danger Zone
            </Divider>
            <List.Item>
              <Button.Group widths="2">
                <Button color="red" onClick={handleClearVotes}>
                  {
                    [
                      'Clear votes for this item',
                      'Are you sure to clear votes for this item?',
                      'Votes for this item are reset.',
                    ][stateClearVotes]
                  }
                </Button>
              </Button.Group>
            </List.Item>
          </>
        ) : null}
      </List>
    </Segment>
  ) : null;
};
export default Voting;
