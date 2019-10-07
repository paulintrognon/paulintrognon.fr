import css from './Contact.css';

export default ({ link, img, alt, children }) => (
  <a href={link} className={css.iconLink}>
    <img src={img} alt={alt} />
    <p className={css.iconLinkText}>{children}</p>
  </a>
);