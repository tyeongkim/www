import { style } from '@vanilla-extract/css';

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 'max(calc(100vw / 32), 32px)',
  '@media': {
    'screen and (max-width: 768px)': {
      zIndex: 1,
    },
  },
});

export const hero = style({
  fontSize: 'calc(100vw / 18.5)',
  fontWeight: 600,
  lineHeight: 1.14,
  background: 'linear-gradient(180deg, #F5F5F5 0%, #8F8F8F 100%)',
  backgroundClip: 'text',
  color: 'transparent',
  '@media': {
    'screen and (max-width: 1000px)': {
      fontSize: 'calc(100vw / 16)',
    },
    'screen and (max-width: 768px)': {
      fontSize: 'calc(100vw / 12)',
    },
    'screen and (max-width: 600px)': {
      fontSize: 40,
    },
  },
});

export const description = style({
  width: '70%',
  fontSize: 20,
  fontWeight: 500,
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: 14,
    },
  },
});

export const contacts = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});
