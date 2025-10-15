import { style } from '@vanilla-extract/css';
import { color } from '@/styles/color.css';

export const link = style({
  width: 'fit-content',
  color: color.text.main,
  fontSize: 16,
  textDecorationLine: 'underline',
  textDecorationStyle: 'solid',
});
