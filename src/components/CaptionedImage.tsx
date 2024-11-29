import type { JSX } from 'react';

export type CaptionedImageProps = {
  readonly imagePath: string;
  readonly imageCaption: string;
};

export const CaptionedImage = ({ imagePath, imageCaption }: CaptionedImageProps): JSX.Element => {
  return (
    <>
      <figure
        style={{
          maxWidth: '80vw',
          marginBlockEnd: '3rem',
          paddingInline: '0.5rem',
        }}
      >
        <figcaption
          style={{
            fontSize: '0.9rem',
            textAlign: 'center',
            color: 'var(--main-4)',
            fontStyle: 'italic',
            width: 'inherit',
            marginBlockEnd: '0.3rem',
          }}
        >
          {imageCaption}
        </figcaption>
        <img
          src={imagePath}
          loading={'eager'}
          draggable={false}
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            height: 'auto',
            display: 'block',
          }}
        ></img>
      </figure>
    </>
  );
};
