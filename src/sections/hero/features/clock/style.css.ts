import { style } from '@vanilla-extract/css';
import { color } from '@/styles/color.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const location = style({
  fontSize: 'min(calc(100vw / 24), 24px)',
  fontWeight: 500,
});

export const time = style({
  fontSize: 'min(calc(100vw / 12), 64px)',
  fontWeight: 600,
});

export const difference = style({
  fontSize: 'min(calc(100vw / 24), 20px)',
  fontWeight: 400,
  color: color.text.sub,
});
