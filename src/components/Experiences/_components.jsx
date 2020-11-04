import css from './Experiences.module.css';

export function Experience({ img, alt, children }) {
  return (
    <div className={css.experience}>
      <picture className={css.experiencePicture}>
        <img className={css.experienceImage} src={`/images/${img}`} alt={alt} />
      </picture>

      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}

export function Title({ children }) {
  return <h3 className={css.title}>{children}</h3>;
}

export function Subtitle({ children }) {
  return <span className={css.subtitle}>{children}</span>;
}

export function Tags({ tags }) {
  return (
    <div className={css.tags}>
      {tags.map(({ img, label, url }) => (
        <TagWrapper url={url} key={label}>
          <div key={label} className={css.tag}>
            <img className={css.tagImage} src={`/images/${img}`} alt={`${label} logo`} />
            {label}
          </div>
        </TagWrapper>
      ))}
    </div>
  );
}

function TagWrapper({ url, children }) {
  if (!url) {
    return children;
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}