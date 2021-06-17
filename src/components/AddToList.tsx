import { Typography, Container, TextField, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useState } from 'react';

import { Istate as Prop } from '../App';

interface Iprop {
  people: Prop['people'];
  setPeople: React.Dispatch<React.SetStateAction<Prop['people']>>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

const AddToList = ({ people, setPeople }: Iprop) => {
  const classes = useStyles();

  const [input, setInput] = useState({
    name: '',
    url: '',
    notes: '',
  });

  const handleChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    if (!input.name || !input.url || !input.notes) return;
    setPeople([...people, input]);
    setInput({
      name: '',
      url: '',
      notes: '',
    });
  };
  return (
    <Container maxWidth='sm'>
      <Typography align='center' variant='h5'>
        Add to List
      </Typography>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete='off'
      >
        <TextField
          fullWidth
          id='outlined-basic'
          label='Name'
          variant='outlined'
          name='name'
          value={input.name}
          onChange={handleChange}
        />
        <br />
        <TextField
          fullWidth
          id='outlined-basic'
          label='Image Url'
          variant='outlined'
          name='url'
          value={input.url}
          onChange={handleChange}
        />
        <br />
        <TextField
          fullWidth
          id='outlined-basic'
          label='About'
          variant='outlined'
          multiline
          rows={4}
          name='notes'
          value={input.notes}
          onChange={handleChange}
        />
        <Button fullWidth color='primary' type='submit' variant='contained'>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddToList;
