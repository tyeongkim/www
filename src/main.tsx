import { ViteReactSSG } from 'vite-react-ssg/single-page';
import App from './app';
import '@fontsource-variable/inter/index.css';
import 'minireset.css';
import '@/styles/reset.css';
import { StrictMode } from 'react';

export const createRoot = ViteReactSSG(
  <StrictMode>
    <App />
  </StrictMode>,
);
