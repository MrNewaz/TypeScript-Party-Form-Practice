import { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import MyTheme from './MyTheme';
import List from './components/List';
import AddToList from './components/AddToList';

export interface Istate {
  people: {
    name: string;
    url: string;
    notes?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<Istate['people']>([
    {
      name: 'Saif Newaz',
      url: 'https://saifnewaz.me/assets/img/saif.png',
      notes: 'Loves art & coding',
    },
  ]);

  return (
    <MyTheme darkmode={false}>
      <Container maxWidth='lg'>
        <Typography align='center' variant='h3'>
          People invited to the party
        </Typography>
        <List people={people} />
        <AddToList people={people} setPeople={setPeople} />
      </Container>
    </MyTheme>
  );
}

export default App;
