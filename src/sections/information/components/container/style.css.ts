import { style } from '@vanilla-extract/css';
import { color } from '@/styles/color.css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const label = style({
  fontSize: 16,
  fontWeight: 500,
  color: color.text.sub,
});
