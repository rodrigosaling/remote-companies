import React from 'react';
import { Global, css } from '@emotion/react';

// https://www.joshwcomeau.com/css/custom-css-reset/
const cssReset = {
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  '*': {
    margin: 0,
  },
  body: {
    lineHeight: 1.5,
    '-webkit-font-smoothing': 'antialiased',
  },
  'img, picture, video, canvas, svg': {
    display: `block`,
    maxWidth: `100%`,
  },
  'input, button, textarea, select': {
    font: `inherit`,
  },
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: `break-word`,
  },
};

const globalStyle = {
  html: {
    fontFamily: "'Fira Sans', sans-serif",
    backgroundColor: '#f1f5f9',
    color: '#334155',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Global styles={css(cssReset, globalStyle)} />
      {children}
    </>
  );
}
