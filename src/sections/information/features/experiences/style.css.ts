import { style } from '@vanilla-extract/css';
import { color } from '@/styles/color.css';

export const role = style({
  fontSize: 24,
  fontWeight: 600,
});

export const information = style({
  display: 'flex',
  gap: 16,
  marginTop: 4,
  fontSize: 16,
  color: color.text.sub,
});
