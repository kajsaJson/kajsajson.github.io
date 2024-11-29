import type { JSX } from 'react';
import { CaseStudyCard } from 'src/components/CaseStudyCard.tsx';
import { CaseStudyTemplate } from 'src/components/CaseStudyTemplate.tsx';
import { HeaderLogo } from 'src/components/HeaderLogo.tsx';
import { HeadingTwo } from 'src/components/HeadingTwo.tsx';
import { SocialLink } from 'src/components/SocialLink.tsx';
import { CASE_STUDIES } from 'src/constants/CASE_STUDIES.ts';
import type { CaseStudy } from 'src/types/CaseStudy.d.ts';
import { scrollToTop } from 'src/utils/scrollToTop.ts';

export const App = (): JSX.Element => {
  return (
    <>
      {/* Logo */}

      <header
        style={{
          width: '100%',
          backgroundColor: 'var(--main-2)',
        }}
      >
        <HeaderLogo />
      </header>
      <svg
        width="1920"
        height="117.50391"
        viewBox="0 0 1920 117.50391"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
        }}
      >
        <path
          style={{
            display: 'inline',
            opacity: 1,
            fill: '#e8e9e9',
            fillOpacity: 1,
            fillRule: 'evenodd',
            strokeWidth: 0.399_686,
            strokeLinejoin: 'round',
            strokeDashoffset: 29.2479,
            paintOrder: 'markers fill stroke',
          }}
          d="M 0,0 V 117.50391 C 14.99997,74.911396 85.00007,19.356366 120,0.83789 154.99994,19.356366 225.00002,74.911396 240,117.50391 254.99998,74.911396 325.00007,19.356366 360,0.83789 394.99993,19.356366 465.00003,74.911396 480,117.50391 494.99997,74.911396 565.00007,19.356366 600,0.83789 634.99993,19.356366 705.00002,74.911396 720,117.50391 734.99998,74.911396 805.00007,19.356366 840,0.83789 c 34.99993,18.518476 105.00002,74.073506 120,116.66602 14.99998,-42.592514 85,-98.147544 120,-116.66602 35,18.518476 105,74.073506 120,116.66602 15,-42.592514 85,-98.147544 120,-116.66602 35,18.518476 105,74.073506 120,116.66602 15,-42.592514 85,-98.147544 120,-116.66602 35,18.518476 105,74.073506 120,116.66602 15,-42.592514 85,-98.147544 120,-116.66602 35,18.518476 105,74.073506 120,116.66602 V 0 Z"
        />
      </svg>

      {/* Intro Text */}

      <div
        style={{
          marginBlock: '2rem',
          maxWidth: '35em',
        }}
      >
        <HeadingTwo headingText={`Hi, I'm Kajsa 👋`} />
        <article
          style={{
            maxWidth: '40rem',
            fontSize: '1rem',
            lineHeight: '1.4',
            marginInline: '1rem',
            textAlign: 'center',
          }}
        >
          I'm a frontend developer and UX designer based in Sweden. I'm deeply passionate about solving complex problems with elegant and intuitive designs.
        </article>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          marginBlockEnd: '1rem',
        }}
      >
        <SocialLink
          urlText={`https://www.linkedin.com/in/kajsa-jonasson-823475233`}
          visibleText={`LinkedIn`}
        />
        <SocialLink
          urlText={`https://github.com/kajsaJson`}
          visibleText={`GitHub`}
        />
      </div>
      <div
        style={{
          maxWidth: '100%',
          paddingInline: '2rem',
          marginBlockEnd: '1rem',
        }}
      >
        <svg
          width="350"
          height="33.928619"
          viewBox="0 0 349.99998 33.928619"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
          }}
        >
          <g transform="translate(-18.413605,-44.782752)">
            <path
              style={{
                fill: '#6f7c49',
                fillRule: 'evenodd',
                strokeLinejoin: 'round',
              }}
              d="m 184.96644,44.783539 c -3.05606,0.03997 -6.23703,1.63134 -8.01678,5.41353 h -0.003 c -1.8116,3.850377 -1.79082,7.330374 0.7825,12.471215 H 32.906521 c -0.903669,-0.662908 -2.153095,-1.63631 -2.919897,-2.475366 -1.301401,-1.424032 -3.778509,-4.000777 -3.778509,-4.000777 0,0 0.727852,2.542501 1.558901,4.134746 0.425034,0.814333 1.152949,1.79167 1.659378,2.432739 -0.807456,-0.05891 -1.728897,-0.09133 -2.712854,-0.09133 h -2.566707 c -3.17567,0 -5.733228,0.347635 -5.733228,0.779452 0,0.431815 2.557558,0.77945 5.733228,0.77945 h 2.566707 c 0.983964,0 1.905393,-0.03548 2.712854,-0.09439 -0.506384,0.641099 -1.234684,1.616015 -1.659378,2.429696 -0.831049,1.592245 -1.558901,4.13779 -1.558901,4.13779 0,0 2.477108,-2.576744 3.778509,-4.000776 0.765864,-0.838028 2.013426,-1.808583 2.916853,-2.472321 48.540012,-0.303815 97.098503,0.443955 145.632503,-0.04568 3.26429,5.758352 9.51272,11.341675 14.44418,14.416799 0.24625,0.153536 0.63197,0.148953 0.87081,0 4.93158,-3.075181 11.17995,-8.658336 14.44419,-14.416799 48.53766,0.09365 97.08984,0.04568 145.63249,0.04568 0.90343,0.663738 2.14795,1.634293 2.91382,2.472321 1.30139,1.424032 3.77851,4.000776 3.77851,4.000776 0,0 -0.72785,-2.545545 -1.5589,-4.137789 -0.42432,-0.812933 -1.15001,-1.785523 -1.65634,-2.426651 0.80674,0.05877 1.73012,0.09133 2.71286,0.09133 h 2.5667 c 3.17567,0 5.73323,-0.347635 5.73323,-0.779451 0,-0.431815 -2.55756,-0.77945 -5.73323,-0.77945 h -2.5667 c -0.98281,0 -1.90606,0.03256 -2.71286,0.09133 0.50644,-0.641068 1.2313,-1.618405 1.65634,-2.432739 0.83105,-1.592244 1.5589,-4.134745 1.5589,-4.134745 0,0 -2.47712,2.576745 -3.77851,4.000777 -0.7668,0.839055 -2.01318,1.812458 -2.91686,2.475365 H 209.09898 c 2.57342,-5.14096 2.59411,-8.620782 0.78249,-12.471215 -3.16398,-6.723893 -10.76034,-6.517203 -14.20061,-2.996015 -2.7065,2.770139 -2.71505,7.744899 0.4841,9.478245 3.01394,1.633014 5.74627,1.313819 6.54921,-1.896867 0.74271,-2.969921 -3.61173,-4.887697 -4.17736,-1.863375 -0.22145,1.183579 1.32754,1.67749 1.29402,0.727692 -0.0466,-1.314719 2.18475,-0.278383 1.0078,1.434068 -0.60039,0.873554 -1.84926,1.035374 -3.52277,-0.371458 -1.58365,-1.331274 -1.8849,-3.760065 0.14918,-5.824569 1.99612,-2.026467 8.10496,-2.25916 10.54087,2.521037 1.63498,3.208506 0.56972,7.187376 -2.00343,11.770928 -2.45984,4.381648 -6.32306,7.729509 -12.58692,12.882254 -6.26385,-5.152745 -10.13013,-8.500606 -12.58995,-12.882254 -2.57317,-4.583552 -3.6354,-8.562422 -2.0004,-11.770928 2.43589,-4.780197 8.54169,-4.547504 10.53781,-2.521037 2.03409,2.064504 1.73284,4.493295 0.14918,5.824569 -1.6735,1.406832 -2.92236,1.245012 -3.52274,0.371458 -1.17696,-1.712451 1.05441,-2.748787 1.0078,-1.434068 -0.0336,0.949798 1.51851,0.455887 1.29706,-0.727692 -0.56563,-3.024322 -4.92008,-1.106546 -4.17736,1.863375 0.80295,3.210686 3.53525,3.529881 6.54921,1.896867 3.19914,-1.733346 3.19058,-6.708106 0.48411,-9.478245 -1.50514,-1.540519 -3.80689,-2.448605 -6.18385,-2.417515 z"
            />
          </g>
        </svg>
      </div>

      {/* Portfolio Cards */}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          backgroundColor: 'var(--main-2)',
          paddingBlockStart: '2rem',
          paddingBlockEnd: '2.3rem',
        }}
      >
        <HeadingTwo headingText={`Portfolio`} />
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {CASE_STUDIES.map((caseStudy: CaseStudy, index: number): JSX.Element => {
            return (
              <CaseStudyCard
                caseStudy={caseStudy}
                index={index}
                key={index}
              />
            );
          })}
        </div>
      </div>
      {CASE_STUDIES.map((caseStudy: CaseStudy, index: number): JSX.Element => {
        return (
          <CaseStudyTemplate
            caseStudy={caseStudy}
            index={index}
            key={index}
          />
        );
      })}
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          bottom: '3rem',
          right: '3rem',
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          backgroundColor: 'hsl(0, 0%, 100%)',
          border: 'none',
          boxShadow: '0px 4px 5px var(--shadow)',
          cursor: 'pointer',
        }}
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5rem"
          viewBox="0 -960 960 960"
          width="1.5rem"
          fill="#1a1a1a"
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
          }}
        >
          <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
        </svg>
      </button>
    </>
  );
};
