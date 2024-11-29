import type { JSX } from 'react';

export type HeadingThreeProps = {
  readonly headingText: string;
};

export const HeadingThree = ({ headingText }: HeadingThreeProps): JSX.Element => {
  return (
    <>
      <h3
        style={{
          color: 'var(--main-4)',
          fontSize: '1.1rem',
          fontWeight: '600',
          marginBlockEnd: '0.5rem',
        }}
      >
        {headingText}
      </h3>
    </>
  );
};
