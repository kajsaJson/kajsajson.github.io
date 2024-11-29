export type SocialLinkProps = {
  readonly urlText: string;
  readonly visibleText: string;
};

export const SocialLink = ({ urlText, visibleText }: SocialLinkProps): JSX.Element => {
  return (
    <>
      <a
        href={urlText}
        target={`_blank`}
        rel={`noopener noreferrer`}
        style={{
          backgroundColor: 'var(--main-1)',
          paddingBlock: '0.1rem',
          paddingInline: '1rem',
          borderRadius: '0.4rem',
          boxShadow: '1px 2px 4px var(--shadow)',
        }}
      >
        {visibleText}
      </a>
    </>
  );
};
