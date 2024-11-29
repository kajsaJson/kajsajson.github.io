import { type JSX } from 'react';

export const HeaderLogo = (): JSX.Element => {
  return (
    <>
      <img
        src={`/logo.svg`}
        alt={`[Kajsa Jonasson] logo`}
        draggable={false}
        style={{
          maxWidth: '100%',
          maxHeight: '2rem',
          display: 'block',
          paddingInline: '1rem',
          marginBlockStart: '1rem',
          marginBlockEnd: '0.5rem',
        }}
        loading={'eager'}
      />
    </>
  );
};
