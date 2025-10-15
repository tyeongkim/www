import { style } from '@vanilla-extract/css';

export const wrapper = style({
  padding: `max(calc(100vw / 20), 80px) max(calc(100vw / 24), 16px)`,
  display: 'flex',
  flexDirection: 'column',
  gap: `max(calc(100vw / 24), 48px)`,
});
