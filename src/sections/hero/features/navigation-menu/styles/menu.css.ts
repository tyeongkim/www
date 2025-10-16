import { style } from '@vanilla-extract/css';
import { color } from '@/styles/color.css';

export const menu = style({
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  '@media': {
    'screen and (max-width: 600px)': {
      padding: 16,
      gap: 16,
    },
  },
});

export const alignments = {
  left: style({
    alignItems: 'flex-start',
  }),
  right: style({
    alignItems: 'flex-end',
  }),
};

export const item = style({
  fontSize: 36,
  fontWeight: 400,
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: 24,
    },
  },
});

export const link = style({
  color: color.text.sub,
  textDecoration: 'none',
  transition: 'color 0.2s ease-in-out',
});

export const activeLink = style({
  color: color.text.main,
  fontWeight: 600,
});

export const disabledLink = style({
  opacity: 0.35,
  pointerEvents: 'none',
  cursor: 'not-allowed',
});
