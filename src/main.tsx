import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource/open-sauce-sans/400.css';
import '@fontsource/open-sauce-sans/500.css';
import '@fontsource/open-sauce-sans/600.css';
import '@fontsource/open-sauce-sans/700.css';
import '@fontsource/open-sauce-sans/800.css';
import '@fontsource/open-sauce-sans/900.css';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
