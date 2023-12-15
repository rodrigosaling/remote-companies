import React from 'react';
import { Global, css } from '@emotion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Global
        styles={css({
          html: {
            fontFamily: "'Noto Sans', sans-serif",
          },
        })}
      />
      {children}
    </>
  );
}
