import css from './skills.css';

export function Skill({ logo, alt, children }) {
  return (
    <div className={css.skill}>
      {logo ? (
        <img src={`/static/images/${logo}`} alt={alt} className={css.logo} />
      ) : (
        <span className={css.logo} />
      )}

      {children}
    </div>
  );
}

export function Title({ children }) {
  return <h3 className={css.title}>{children}</h3>;
}

export function Subtitle({ children }) {
  return <h4 className={css.subtitle}>{children}</h4>;
}

export function P({ children }) {
  return <p className={css.p}>{children}</p>;
}
