import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Segment, Header, List } from 'semantic-ui-react';

import { getVotes } from '~/actions';

const Voting = () => {
  const votes = useSelector(store => store.votes);
  const dispatch = useDispatch();
  let location = useLocation();

  React.useEffect(() => {
    dispatch(getVotes(location.pathname));
  }, [dispatch, location]);

  return votes.loaded ? ( // is store content available? (votable behavior is optional)
    <aside>
      <Segment floated="right">
        <Header dividing sub>
          I am a Voting component
        </Header>
        <List>
          <List.Item>has votes: {votes?.has_votes ? 'yes' : 'no'}</List.Item>
          <List.Item>average vote: {votes?.average_vote}</List.Item>
        </List>
      </Segment>
    </aside>
  ) : null;
};
export default Voting;
