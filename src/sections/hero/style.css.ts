import { style } from '@vanilla-extract/css';

export const wrapper = style({
  paddingTop: 'calc(100vw / 30)',
  height: '100vh',
  maxHeight: '100vh',
});

export const main = style({
  height: '100%',
  padding:
    'max(calc(100vw / 30), 64px) max(calc(100vw / 24), 16px) max(calc(100vw / 30), 48px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});
