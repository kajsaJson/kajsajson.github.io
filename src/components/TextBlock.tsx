import type { JSX } from 'react';
import { HeadingThree } from 'src/components/HeadingThree';

export type TextBlockProps = {
  readonly headingText: string;
  readonly articleText: string;
};

export const TextBlock = ({ headingText, articleText }: TextBlockProps): JSX.Element => {
  return (
    <>
      <div
        style={{
          marginBlockEnd: '2rem',
        }}
      >
        <HeadingThree headingText={headingText} />
        <article
          style={{
            maxWidth: '30rem',
            fontSize: '1rem',
            lineHeight: '1.4',
          }}
        >
          {articleText}
        </article>
      </div>
    </>
  );
};
