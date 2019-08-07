import { Skill, Title, Subtitle, P } from './_components';

import css from './skills.css';

export default () => (
  <div className={css.skillsGroup}>
    <Title>Développeur Frontend</Title>
    <Skill logo="react.svg">
      <Subtitle>React.js</Subtitle>
      <P>
        Solides connaissances acquisent au long de mes projets professionnels et
        personnels (guess-the-game.com, music-genres.com)
      </P>
      <P>
        Conception et développement d&apos;interfaces utilisateurs ou de
        dashboards.
      </P>
      <P>
        Développement d&apos;applications mobiles avec la technologie React
        Native.
      </P>
    </Skill>
    <Skill logo="angular.svg">
      <Subtitle>Angular</Subtitle>
      <P>
        Développement d’interfaces utilisateurs et back-offices, avec tests
        unitaires et tests End-2-End.
      </P>
      <P>
        Développement d&apos;une application mobile à l&apos;aide du framework
        Ionic.
      </P>
    </Skill>
    <Skill logo="css.svg">
      <Subtitle>Expertise Frontend</Subtitle>
      <P>
        Bonne connaissances de l&apos;ensemble des technologies et des bonnes
        pratiques du front.
      </P>
      <P>
        Bonnes pratiques CSS : BEM, approche Mobile First, accessibilité,
        animations...
      </P>
      <P>
        Au courant des dernières technologies : Webpack, PWA, Next.js
        (technologie utilisée pour ce site)
      </P>
    </Skill>
  </div>
);
