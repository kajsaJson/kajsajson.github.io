import type { JSX } from 'react';

export type HeadingTwoProps = {
  readonly headingText: string;
};

export const HeadingTwo = ({ headingText }: HeadingTwoProps): JSX.Element => {
  return (
    <>
      <h2
        style={{
          fontFamily: 'var(--font-fancy)',
          color: 'var(--main-4)',
          fontSize: '1.3rem',
          fontWeight: '600',
          marginBlockEnd: '1.5rem',
          textAlign: 'center',
        }}
      >
        {headingText}
      </h2>
    </>
  );
};
