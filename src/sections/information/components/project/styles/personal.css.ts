import { style } from '@vanilla-extract/css';
import { color } from '@/styles/color.css';

export const thumbnail = style({
  display: 'block',
  maxWidth: 320,
  backgroundColor: '#2A2A2A',
  aspectRatio: '16 / 9',
  overflow: 'hidden',
  borderRadius: 16,
  '@media': {
    'screen and (max-width: 768px)': {
      maxWidth: '100%',
    },
  },
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});

export const title = style({
  fontSize: 24,
  fontWeight: 500,
  marginTop: 18,
});

export const description = style({
  fontSize: 16,
  fontWeight: 400,
  marginTop: 8,
  color: color.text.sub,
});

export const links = style({
  marginTop: 12,
  display: 'flex',
  gap: 16,
  flexWrap: 'wrap',
});
