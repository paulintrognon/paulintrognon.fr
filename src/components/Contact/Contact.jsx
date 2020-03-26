import FadeIn from '../FadeIn/FadeIn';
import css from './Contact.module.css';
import IconLink from './IconLink';

export default () => (
  <div className={css.contact}>
    <FadeIn>
      <p>
        <img src="/images/contact/portrait.jpg" alt="Portrait" />
      </p>
      <p className={css.contactPhrase}>
        Vous pouvez me contacter à l’adresse : contact@paulintrognon.fr
      </p>
      <div>
        <IconLink
          img="/images/contact/github.svg"
          alt="GitHub Logo"
          link="https://github.com/paulintrognon/"
        >
          GitHub
        </IconLink>
        <IconLink
          img="/images/contact/cv.svg"
          alt="CV Logo"
          link="/cv_paulin_trognon_developpeur_web.pdf"
        >
          Curriculum Vitae
        </IconLink>
        <IconLink
          img="/images/contact/linkedin.svg"
          alt="LinkedIn Logo"
          link="https://www.linkedin.com/in/paulin-trognon-2ba51295/"
        >
          LinkedIn
        </IconLink>
      </div>
    </FadeIn>
  </div>
);
