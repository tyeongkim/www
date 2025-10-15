import { globalStyle } from '@vanilla-extract/css';
import { color } from './color.css';

globalStyle('html, body', {
  width: '100%',
  fontFamily: 'Inter Variable, -apple-system, sans-serif',
  background: `url(/assets/noise.webp), ${color.background}`,
  backgroundColor: '#101010',
  color: color.text.main,
  WebkitOverflowScrolling: 'touch',
  overscrollBehaviorY: 'none',
  padding: 'env(safe-area-inset)',
});

globalStyle('*', {
  letterSpacing: '-0.0375em',
  lineHeight: 1.35,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontFeatureSettings: '"liga" 1, "calt" 1',
  textWrap: 'pretty',
});

globalStyle('img', {
  pointerEvents: 'none',
});
