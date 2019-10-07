import { Experience, Title, Subtitle, Tags } from './_components';
import css from './Experiences.css';

export default () => (
  <Experience img="leonpaul.jpg" alt="Leon Paul">
    <Title>
      Développement d’un back-office fullstack JavaScript
      <Subtitle>
        2011 - 2012 <small>(18 mois)</small>
      </Subtitle>
    </Title>
    <Tags
      tags={[
        { img: 'angular.svg', label: 'Angular 4' },
        { img: 'typescript.svg', label: 'TypeScript' },
        { img: 'nodejs.svg', label: 'Node.js' },
      ]}
    />
    <ul className={css.list}>
      <li>Elaboration des interfaces frontend en Angular 4</li>
      <li>Implémentation des APIs en NodeJS</li>
      <li>Déploiement sur un VPS ovh</li>
    </ul>
  </Experience>
);