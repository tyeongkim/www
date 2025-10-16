import { style } from '@vanilla-extract/css';
import { color } from '@/styles/color.css';

export const trigger = style({
  position: 'fixed',
  top: 24,
  right: 24,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 4,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  color: color.text.main,
  zIndex: 3,
  '@media': {
    'screen and (max-width: 600px)': {
      top: 16,
      right: 16,
    },
  },
});

export const icon = style({
  width: 20,
  '@media': {
    'screen and (max-width: 600px)': {
      width: 24,
    },
  },
});

export const label = style({
  fontSize: 16,
  fontWeight: 500,
  '@media': {
    'screen and (max-width: 600px)': {
      display: 'none',
    },
  },
});
