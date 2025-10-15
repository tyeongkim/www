import { style } from '@vanilla-extract/css';

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  fontSize: 18,
  '@media': {
    'screen and (max-width: 600px)': {
      gap: 20,
    },
  },
});

export const skillSet = style({
  display: 'flex',
  gap: 16,
  '@media': {
    'screen and (max-width: 600px)': {
      flexDirection: 'column',
      gap: 4,
    },
  },
});

export const name = style({
  fontWeight: 600,
});

export const skills = style({
  display: 'flex',
  gap: `6px 16px`,
  flexWrap: 'wrap',
  fontWeight: 400,
  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: 16,
    },
  },
});
