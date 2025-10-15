import { style } from '@vanilla-extract/css';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '64px 48px',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '48px 0',
    },
  },
});
