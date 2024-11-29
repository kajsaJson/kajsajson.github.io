import type { PlatformImagePair } from 'src/types/PlatformImagePair.d.ts';

export type CaseStudy = {
  readonly caseStudyName: string;
  readonly companyDescription: string;
  readonly previewCaption: string;
  readonly texts: {
    readonly goalText: string;
    readonly problemText: string;
    readonly userText: string;
    readonly takeawaysText: string;
  };
  readonly images: {
    readonly preview: string;
    readonly user: {
      readonly persona: string;
      readonly journey: string;
    };
    readonly wireframe: PlatformImagePair;
    readonly lowFidelityPrototype: PlatformImagePair;
    readonly highFidelityPrototype: PlatformImagePair;
  };
};
