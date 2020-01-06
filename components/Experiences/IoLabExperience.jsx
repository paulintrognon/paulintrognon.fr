import { Experience, Title, Subtitle, Tags } from './_components';
import Link from '../Link/Link';
import css from './Experiences.css';

export default () => [
  <Experience img="danone.jpg" alt="io-lab">
    <Title>
      Application mobile B2B pour Danone
      <Subtitle>
        2018 <small>(6 mois)</small>
      </Subtitle>
    </Title>
    <Tags
      tags={[
        { img: 'react.svg', label: 'React Native', url: 'https://facebook.github.io/react-native/' },
        { img: 'prismic.png', label: 'Prismic.io', url: 'https://prismic.io' },
      ]}
    />
    <ul className={css.list}>
      <li>Force de proposition sur l&apos;architecture du projet</li>
      <li>Intégration des écrans et développement de l&apos;application en React Native</li>
      <li>
        Conception et configuration du back-end avec le CMS{' '}
        <Link href="https://prismic.io" openInNewWindow>
          Prismic.io
        </Link>
      </li>
      <li>Développement d&apos;APIs pour des applications mobiles en Symfony</li>
    </ul>
  </Experience>,
  <Experience img="eovi.jpg" alt="io-lab">
    <Title>
      Application mobile hybride B2C pour Eovi MCD
      <Subtitle>
        2018 <small>(4 mois)</small>
      </Subtitle>
    </Title>
    <Tags
      tags={[
        { img: 'angular.svg', label: 'Angular' },
        { img: 'ionic.svg', label: 'Ionic', url: 'https://ionicframework.com/' },
        { img: 'symfony.svg', label: 'Somfony', url: 'https://symfony.com/' },
      ]}
    />
    <ul className={css.list}>
      <li>Intégration des écrans en Angular avec le framework Ionic</li>
      <li>Création des services TypeScript de synchronisation avec le back-end</li>
      <li>Développement d&apos;APIs REST sur le back-end Symfony</li>
    </ul>
  </Experience>,
  <Experience img="jacquet.jpg" alt="io-lab">
    <Title>
      Site web pour jeu concours Pains Jacquet
      <Subtitle>
        2018 <small>(1 mois)</small>
      </Subtitle>
    </Title>
    <Tags tags={[{ img: 'react.svg', label: 'React.js' }, { img: 'nodejs.svg', label: 'Node.js' }]} />
    <ul className={css.list}>
      <li>Intégration des écrans du jeu concours avec la technologie React</li>
      <li>Back-end de tirage du gagnant et d&apos;anti-triche en Node.js</li>
    </ul>
  </Experience>,
];
