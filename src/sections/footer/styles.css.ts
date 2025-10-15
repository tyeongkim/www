import { style } from '@vanilla-extract/css';
import { color } from '@/styles/color.css';

export const wrapper = style({
  padding: `24px 0`,
  background:
    'linear-gradient(180deg, rgba(45, 45, 45, 0) 0%, rgba(45, 45, 45, 0.6) 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
});

export const runner = style({
  width: 80,
  height: 'auto',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  alignItems: 'center',
  fontSize: 12,
  color: color.text.sub,
});

export const link = style({
  color: color.text.sub,
  textDecorationLine: 'underline',
  textDecorationStyle: 'solid',
});
