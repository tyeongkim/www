import { createGlobalTheme } from '@vanilla-extract/css';

export const color = createGlobalTheme(':root', {
  background: 'linear-gradient(155deg, #0F0F0F 16%, #1E1E1E 66%) no-repeat',
  text: {
    main: '#F5F5F5',
    sub: '#999999',
  },
});
