import { Skill, Title, Subtitle, P } from './_components';

import css from './skills.css';

export default () => (
  <div className={css.skillsGroup}>
    <Title>Développeur Frontend</Title>
    <Skill logo="react.svg">
      <Subtitle>Applications web (PWA, back-offices...)</Subtitle>
      <P>Expertise de la technologie React.js, que je privilégie pour les PWA (Progressive Web Apps)</P>
      <P>Bonnes connaissances de la technologie Angular, et de TypeScript</P>
      <P>Connaissances de base en dataviz (D3.js, Chart.js) et de Vue.js</P>
    </Skill>
    <Skill logo="angular.svg">
      <Subtitle>Applications mobiles</Subtitle>
      <P>Solides connaissances de la technologie React Native</P>
      <P>Initié au framework Ionic (basé sur Angular)</P>
      <P>Branchement de Headless CMS&nbsp;: Contentful, Prismic.io, DatoCMS, GraphQL</P>
    </Skill>
    <Skill logo="css.svg">
      <Subtitle>Expertise Frontend</Subtitle>
      <P>Bonnes connaissances des outils du front : ES2019, Webpack, yarn, Jest, Enzyme...</P>
      <P>
        Avocat des bonnes pratiques : CI, Tests unitaires et E2E, outils de lintage (ESLint, Prettier), BEM, Mobile
        First...
      </P>
    </Skill>
  </div>
);
