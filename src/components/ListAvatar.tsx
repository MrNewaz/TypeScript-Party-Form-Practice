import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },

    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

interface AvatarProp {
  src: string;
}

export default function ListAvatar({ src }: AvatarProp) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        variant='rounded'
        alt='avatar'
        src={src}
        className={classes.large}
      />
    </div>
  );
}
