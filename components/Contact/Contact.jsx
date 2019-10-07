import css from './Contact.css';
import IconLink from './IconLink';

export default () => (
  <div className={css.contact}>
    <p>
      <img src="/static/images/contact/portrait.jpg" alt="Portrait" />
    </p>
    <p className={css.contactPhrase}>
      Vous pouvez me contacter à l’adresse : contact@paulintrognon.fr
    </p>
    <div>
      <IconLink
        img="/static/images/contact/github.svg"
        alt="GitHub Logo"
        link="https://github.com/paulintrognon/"
      >
        GitHub
      </IconLink>
      <IconLink
        img="/static/images/contact/cv.svg"
        alt="CV Logo"
        link="/cv_paulin_trognon_developpeur_web.pdf"
      >
        Curriculum Vitae
      </IconLink>
      <IconLink
        img="/static/images/contact/linkedin.svg"
        alt="LinkedIn Logo"
        link="https://www.linkedin.com/in/paulin-trognon-2ba51295/"
      >
        LinkedIn
      </IconLink>
    </div>
  </div>
);
