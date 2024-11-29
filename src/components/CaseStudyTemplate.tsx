import { type JSX } from 'react';
import { CaptionedImage } from 'src/components/CaptionedImage.tsx';
import { HeadingThree } from 'src/components/HeadingThree.tsx';
import { HeadingTwo } from 'src/components/HeadingTwo.tsx';
import { ImageSet } from 'src/components/ImageSet.tsx';
import { TextBlock } from 'src/components/TextBlock.tsx';
import type { CaseStudy } from 'src/types/CaseStudy.d.ts';

export type CaseStudyTemplateProps = {
  readonly caseStudy: CaseStudy;
  readonly index: number;
};

export const CaseStudyTemplate = ({ caseStudy, index }: CaseStudyTemplateProps): JSX.Element => {
  const {
    //
    caseStudyName,
    companyDescription,
    previewCaption,
    texts,
    images,
  } = caseStudy;

  const {
    //
    goalText,
    problemText,
    userText,
    takeawaysText,
  } = texts;

  const { preview, user, highFidelityPrototype, lowFidelityPrototype, wireframe } = images;

  const { persona, journey } = user;

  const { desktop: hifiDesktop, mobile: hifiMobile } = highFidelityPrototype;

  const { desktop: lofiDesktop, mobile: lofiMobile } = lowFidelityPrototype;

  const { desktop: wireframeDesktop, mobile: wireframeMobile } = wireframe;

  return (
    <>
      <div
        style={{
          marginBlock: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginInline: '1rem',
        }}
        id={`${index}`}
      >
        <HeadingTwo headingText={`Case study: ${caseStudyName} — ${companyDescription}`} />
        <div
          style={{
            maxWidth: '800px',
          }}
        >
          <CaptionedImage
            imagePath={preview}
            imageCaption={previewCaption}
          />
        </div>
        <div
          style={{
            display: 'flex',
            columnGap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <TextBlock
            headingText={`The problem:`}
            articleText={problemText}
          />
          <TextBlock
            headingText={`The goal:`}
            articleText={goalText}
          />
        </div>
        <ImageSet
          imageSetData={[
            {
              imagePath: persona,
              imageCaption: `User persona`,
            },
            {
              imagePath: journey,
              imageCaption: `User journey`,
            },
          ]}
        />
        <TextBlock
          headingText={`The user:`}
          articleText={userText}
        />
        <HeadingThree headingText={`Wireframe`} />
        <ImageSet
          imageSetData={[
            {
              imagePath: wireframeDesktop,
              imageCaption: `${wireframeDesktop ? `Desktop` : ``}`,
            },
            {
              imagePath: wireframeMobile,
              imageCaption: `${wireframeMobile ? `Mobile` : ``}`,
            },
          ]}
        />
        <HeadingThree headingText={`Low fidelity prototype`} />
        <ImageSet
          imageSetData={[
            {
              imagePath: lofiDesktop,
              imageCaption: `${lofiDesktop ? `Desktop` : ``}`,
            },
            {
              imagePath: lofiMobile,
              imageCaption: `${lofiMobile ? `Mobile` : ``}`,
            },
          ]}
        />
        <HeadingThree headingText={`High fidelity prototype`} />
        <ImageSet
          imageSetData={[
            {
              imagePath: hifiDesktop,
              imageCaption: `${hifiDesktop ? `Desktop` : ``}`,
            },
            {
              imagePath: hifiMobile,
              imageCaption: `${hifiMobile ? `Mobile` : ``}`,
            },
          ]}
        />
        <TextBlock
          headingText={`Takeaways:`}
          articleText={takeawaysText}
        />
        <div
          style={{
            maxWidth: '100%',
            paddingInline: '2rem',
            marginBlockEnd: '1rem',
          }}
        >
          <svg
            width="340.91211"
            height="21.765623"
            viewBox="0 0 340.9121 21.765623"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
            }}
          >
            <path
              d="m 170.57031,0 -20.2168,9.2480468 -0.9082,2e-7 c -1.11382,-2.0632959 -4.47872,-3.3652344 -9.49023,-3.3652343 -4.99999,1e-7 -9.22602,1.9808263 -14,2.6972652 -1.4494,0.2175134 -3.24968,0.4440639 -5.14063,0.667969 l -89.833978,-2e-6 L 22.654299,5.439452 16.154295,8.4316411 C 15.155247,8.738682 14.151312,9.0361212 13.103517,9.2187486 8.8095841,9.9671684 0,10.880859 0,10.880859 c 0,0 8.8095862,0.915648 13.103518,1.664061 1.083918,0.188925 2.121214,0.500104 3.154291,0.818362 l 6.468782,2.960923 8.265619,-3.804688 h 89.83984 c 1.88422,0.223223 3.67822,0.449188 5.12305,0.666016 4.77399,0.716439 9.00001,2.697265 14,2.697265 5.01034,0 8.37561,-1.300826 9.49023,-3.363281 h 0.89063 l 20.08789,9.246092 20.21289,-9.246091 0.83008,-10e-7 c 1.11462,2.062455 4.47794,3.363282 9.48828,3.363283 4.99999,-2e-6 9.22602,-1.980826 14,-2.697269 1.44483,-0.216825 3.24078,-0.442791 5.125,-0.666015 l 89.83984,-10e-7 8.26563,3.804691 6.46897,-2.960836 c 1.03309,-0.318254 2.07039,-0.629432 3.1543,-0.818359 4.29393,-0.748413 13.10352,-1.664063 13.10352,-1.664063 0,0 -8.80959,-0.9136892 -13.10352,-1.6621071 -1.0478,-0.1826285 -2.05173,-0.4800661 -3.05078,-0.7871111 l -6.49999,-2.9921847 -8.32618,3.8085909 -89.83398,3e-6 c -1.89095,-0.2239063 -3.69319,-0.450459 -5.14258,-0.6679695 -4.77399,-0.7164422 -9.00001,-2.6972663 -14.00001,-2.6972679 -5.01151,0 -8.37445,1.3019379 -9.48827,3.3652361 l -0.80469,2e-7 z"
              style={{
                opacity: 1,
                fill: '#6f7c49',
                fillRule: 'evenodd',
                strokeWidth: 2.436_82,
                strokeLinejoin: 'round',
                strokeDashoffset: 29.2479,
                paintOrder: 'markers fill stroke',
              }}
            />
          </svg>
        </div>
      </div>
    </>
  );
};
