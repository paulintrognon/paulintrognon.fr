import { Experience, Title, Subtitle, Tags } from './_components';
import Link from '../Link/Link';
import css from './Experiences.css';

export default () => (
  <Experience img="iolab.jpg" alt="io-lab">
    <Title>
      Développement de webapps et d&apos;application mobiles
      <Subtitle>
        2018 <small>(8 mois)</small>
      </Subtitle>
    </Title>
    <Tags
      tags={[
        { img: 'react.svg', label: 'React' },
        { img: 'react.svg', label: 'React Native' },
        {
          img: 'ionic.svg',
          label: 'Ionic',
          url: 'https://ionicframework.com/docs/intro',
        },
        { img: 'symfony.svg', label: 'Symfony' },
      ]}
    />
    <ul className={css.list}>
      <li>
        Création de PWA (
        <Link
          href="https://medium.com/francetelevisions-design/une-pwa-quest-ce-que-c-est-1590361e9a84"
          openInNewWindow
        >
          Progressive Web Apps
        </Link>
        ) en React
      </li>
      <li>
        Développement d&apos;applications mobiles en React Native et en Ionic
      </li>
      <li>
        Développement d&apos;APIs pour des applications mobiles en Symfony
      </li>
      <li>
        Intégration de{' '}
        <Link href="https://prismic.io/headless-cms-intro" openInNewWindow>
          Headless CMS
        </Link>{' '}
        (
        <Link href="https://prismic.io" openInNewWindow>
          Prismic.io
        </Link>
        ,{' '}
        <Link href="https://prismic.io" openInNewWindow>
          DatoCMS
        </Link>
        )
      </li>
    </ul>
  </Experience>
);
