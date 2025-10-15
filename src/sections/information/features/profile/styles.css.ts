import { style } from '@vanilla-extract/css';
import { color } from '@/styles/color.css';

export const face = style({
  width: 100,
  height: 100,
  borderRadius: '50%',
  objectFit: 'cover',
});

export const greeting = style({
  fontSize: 32,
  fontWeight: 500,
  marginTop: 16,
  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: 24,
    },
  },
});

export const introduction = style({
  fontSize: 16,
  fontWeight: 400,
  marginTop: 12,
  color: color.text.sub,
});
