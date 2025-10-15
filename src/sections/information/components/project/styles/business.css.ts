import { style } from '@vanilla-extract/css';
import { color } from '@/styles/color.css';

export const wrapper = style({
  padding: '8px 24px',
  borderLeft: '4px solid #2A2A2A',
});

export const period = style({
  fontSize: 16,
  color: color.text.sub,
});

export const name = style({
  fontSize: 20,
  fontWeight: 500,
  marginTop: 12,
});

export const description = style({
  fontSize: 14,
  fontWeight: 400,
  marginTop: 8,
  color: color.text.sub,
});
