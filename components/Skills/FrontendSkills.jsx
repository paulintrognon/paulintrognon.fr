import { Skill, Title, Subtitle, P } from './_components';
import Link from '../Link/Link';

import css from './skills.css';

export default () => (
  <div className={css.skillsGroup}>
    <Title>Développeur Frontend</Title>
    <Skill logo="react.svg">
      <Subtitle>React.js</Subtitle>
      <P>
        Solides connaissances acquises lors de projets professionnels (Appli
        Danone) et personnels (
        <Link openInNewWindow href="https://guess-the-game.com">
          guess-the-game.com
        </Link>
        ,{' '}
        <Link openInNewWindow href="https://www.music-genres.com">
          music-genres.com
        </Link>
        )
      </P>
      <P>
        Conception et développement d&apos;interfaces utilisateurs ou de
        dashboards
      </P>
      <P>
        Développement d&apos;applications mobiles avec la technologie React
        Native (Android & iOS)
      </P>
    </Skill>
    <Skill logo="angular.svg">
      <Subtitle>Angular</Subtitle>
      <P>
        3 ans d&apos;expérience au sein de l&apos;entreprise Findout, lors du
        développement d&apos;un moteur de recherche.
      </P>
      <P>
        Courte expérience de développement d&apos;une application mobile à
        l&apos;aide du framework Ionic chez io-lab.
      </P>
    </Skill>
    <Skill logo="css.svg">
      <Subtitle>Expertise Frontend</Subtitle>
      <P>
        Bonnes connaissances de l&apos;ensemble des technologies et des bonnes
        pratiques du front.
      </P>
      <P>
        Bonnes pratiques CSS : BEM, Mobile First, accessibilité, animations...
      </P>
      <P>
        Au courant des dernières technologies : Webpack, PWA, Next.js
        (technologie utilisée pour ce site)
      </P>
    </Skill>
  </div>
);
