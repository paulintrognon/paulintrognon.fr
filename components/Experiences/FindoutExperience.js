import { Experience, Title, Subtitle, Tags } from './_components';
import css from './Experiences.css';

export default () => (
  <Experience img="findout.jpg" alt="Findout">
    <Title>
      Développement d’un moteur de recherche
      <Subtitle>2014-2016</Subtitle>
    </Title>
    <Tags
      tags={[
        { img: 'angular.svg', label: 'Angular 1' },
        { img: 'nodejs.svg', label: 'Node.js' },
        { img: 'elasticsearch.svg', label: 'ElasticSearch' },
        { img: 'rabbitmq.svg', label: 'RabbitMQ' },
      ]}
    />
    <ul className={css.list}>
      <li>Elaboration des interfaces frontend en Angular 1</li>
      <li>Ecriture des tests unitaires &amp; E2E (avec Protractor)</li>
      <li>Implémentation des APIs en NodeJS</li>
      <li>Ecriture des algorithmes de recherche ElasticSearch</li>
    </ul>
  </Experience>
);
