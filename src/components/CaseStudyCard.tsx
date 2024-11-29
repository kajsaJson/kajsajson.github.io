import type { JSX } from 'react';
import type { CaseStudy } from 'src/types/CaseStudy.d.ts';
import { scrollToCaseStudy } from 'src/utils/scrollToCaseStudy.ts';

export type CaseStudyCardProps = {
  readonly caseStudy: CaseStudy;
  readonly index: number;
};

export const CaseStudyCard = ({ caseStudy, index }: CaseStudyCardProps): JSX.Element => {
  const { caseStudyName, images } = caseStudy;

  const { preview } = images;

  return (
    <>
      <div
        style={{
          backgroundColor: 'var(--main-1)',
          aspectRatio: '1 / 1',
          height: 'auto',
          maxWidth: '14rem',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '30px',
          boxShadow: '0px 5px 10px var(--shadow)',
          padding: '0.5rem',
        }}
        onClick={(): void => {
          scrollToCaseStudy(index);
        }}
      >
        <img
          src={preview}
          loading={'eager'}
          draggable={false}
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
        <h4
          style={{
            color: 'var(--main-4)',
            fontSize: '1rem',
            fontWeight: '500',
          }}
        >
          {`Case study: ${caseStudyName}`}
        </h4>
      </div>
    </>
  );
};
