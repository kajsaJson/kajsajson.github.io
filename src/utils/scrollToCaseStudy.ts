export const scrollToCaseStudy = (caseStudiesIndex: number): void => {
  const element = document.getElementById(`${caseStudiesIndex}`);

  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth',
  });
};
