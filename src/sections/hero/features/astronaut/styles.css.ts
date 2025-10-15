import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  overflowX: 'hidden',
});

export const astronaut = style({
  width: '100%',
  minWidth: 1100,
  maxWidth: 'none',
  objectFit: 'fill',
});
