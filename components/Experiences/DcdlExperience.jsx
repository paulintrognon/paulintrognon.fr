import { Experience, Title, Subtitle, Tags } from './_components';
import css from './Experiences.css';

export default () => (
  <Experience img="dcdl.jpg" alt="DCDL">
    <Title>
      Version web du jeu Des Chiffres et Des Lettres
      <Subtitle>
        2013 <small>(Stage, 6 mois)</small>
      </Subtitle>
    </Title>
    <Tags
      tags={[
        { img: 'html5.svg', label: 'HTML 5' },
        { img: 'jquery.svg', label: 'jQuery' },
        { img: 'php.svg', label: 'PHP' },
        { img: 'dynamodb.svg', label: 'AWS DynamoDB' },
      ]}
    />
    <ul className={css.list}>
      <li>Implémentation du jeu entièrement en HTML et JavaScript</li>
      <li>
        Architecture du match-making (stockage Amazon DynamoDB, une base NoSQL), le but étant de faire jouer les joueurs
        les uns contre les autres de manière asynchrone
      </li>
      <li>Développement du backend en PHP</li>
    </ul>
  </Experience>
);
