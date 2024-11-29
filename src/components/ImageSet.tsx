import type { JSX } from 'react';
import { CaptionedImage } from 'src/components/CaptionedImage.tsx';
import type { ImageSetData } from 'src/types/ImageSetData.d.ts';

export type ImageSetProps = {
  readonly imageSetData: readonly ImageSetData[];
};

export const ImageSet = ({ imageSetData }: ImageSetProps): JSX.Element => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBlockStart: '0.5rem',
        }}
      >
        {imageSetData
          .filter(({ imagePath, imageCaption }: ImageSetData): boolean => {
            return !!(imagePath && imageCaption);
          })
          .map(({ imagePath, imageCaption }: ImageSetData, index: number): JSX.Element => {
            return (
              <CaptionedImage
                imagePath={imagePath}
                imageCaption={imageCaption}
                key={index}
              />
            );
          })}
      </div>
    </>
  );
};
