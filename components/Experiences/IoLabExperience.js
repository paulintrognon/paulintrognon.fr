import { Experience, Title, Subtitle, Tags } from './_components';
import css from './Experiences.css';

export default () => (
  <Experience img="iolab.jpg" alt="io-lab">
    <Title>
      Développement de webapps et d'application mobiles
      <Subtitle>2018</Subtitle>
    </Title>
    <Tags
      tags={[
        { img: 'react.svg', label: 'React' },
        { img: 'react.svg', label: 'React Native' },
        { img: 'ionic.svg', label: 'Ionic' },
        { img: 'symfony.svg', label: 'Symfony' },
      ]}
    />
    <ul className={css.list}>
      <li>Création de PWA (Progressive Web Apps) en React</li>
      <li>
        Développement d&apos;applications mobiles en React Native et en Ionic
      </li>
      <li>
        Développement d&apos;APIs pour les applications mobiles en Symfony
      </li>
    </ul>
  </Experience>
);
