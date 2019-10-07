import { Experience, Title, Subtitle, Tags } from './_components';
import css from './Experiences.css';

export default () => (
  <Experience img="ozed.jpg" alt="Ozed">
    <Title>
      Interface de gestion de points de fidélités pour optitien-lunetiers
      <Subtitle>
        2017 <small>(3 mois)</small>
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
      <li>Architecture de l’application</li>
      <li>Conception et développement des interfaces frontend en Angular 4</li>
      <li>Implémentation des APIs en NodeJS</li>
      <li>Déploiement sur un VPS ovh</li>
    </ul>
  </Experience>
);
