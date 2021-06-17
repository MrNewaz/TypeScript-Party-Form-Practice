import { Typography, Container, Paper, Box } from '@material-ui/core';
import { FC } from 'react';
import ListAvatar from './ListAvatar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Istate as Iprop } from '../App';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: '2rem 0',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      padding: '0 1rem',
      paddingLeft: '0.5rem',
    },
  })
);

const List: FC<Iprop> = ({ people }) => {
  const classes = useStyles();
  return (
    <Container>
      {people.map((person, i) => (
        <Paper key={i} className={classes.paper}>
          <ListAvatar src={person.url} />
          <Typography variant='h5'>{person.name}</Typography>
          <Box flexGrow={1}>
            <Typography align='right' variant='h5'>
              {person.notes}
            </Typography>
          </Box>
        </Paper>
      ))}
    </Container>
  );
};

export default List;
