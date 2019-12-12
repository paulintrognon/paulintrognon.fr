import { Skill, Title, Subtitle, P } from './_components';

import css from './skills.css';

export default () => (
  <div className={css.skillsGroup}>
    <Title>Développeur Frontend</Title>
    <Skill logo="react.svg">
      <Subtitle>
        Conception d&apos;applications web (PWA, back-offices...)
      </Subtitle>
      <P>
        Maitrise des principaux frameworks front : React.js (Redux, Next.js),
        Angular (TypeScript, RxJs), Vue.js
      </P>
      <P>Dataviz&nbsp;: D3.js, Chart.js</P>
    </Skill>
    <Skill logo="angular.svg">
      <Subtitle>Applications mobiles</Subtitle>
      <P>Utilisation de la technologie React Native, Ionic</P>
      <P>
        Intégration de Headless CMS&nbsp;: Contentful, Prismic.io, DatoCMS,
        GraphQL
      </P>
    </Skill>
    <Skill logo="css.svg">
      <Subtitle>Expertise Frontend</Subtitle>
      <P>
        Bonnes connaissances des outils du front : ES6, Webpack, NPM, Jest,
        Enzyme...
      </P>
      <P>
        Avocat des bonnes pratiques : CI, Tests unitaires et E2E, outils de
        lintage, BEM, Mobile First...
      </P>
    </Skill>
  </div>
);
