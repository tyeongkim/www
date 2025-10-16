import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100dvh',
  backgroundColor: 'rgba(16, 16, 16, 0.70)',
  backdropFilter: 'blur(48px)',
  zIndex: 2,
  '@media': {
    'screen and (max-width: 600px)': {
      borderRadius: 32,
    },
  },
});

export const content = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const roboto = style({
  position: 'absolute',
  maxHeight: 500,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  filter: 'drop-shadow(-12px 24px 0 rgba(148, 148, 148, 0.25))',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    },
  },
});
