import { Skill, Title, Subtitle, P } from './_components';

import css from './skills.css';

export default () => (
  <div className={css.skillsGroup}>
    <Title>Autre compétences</Title>
    <Skill logo="elasticsearch.svg">
      <Subtitle>Elasticsearch</Subtitle>
      <P>3 ans d&apos;utilisation d&apos;ElasticSearch au sein de l&apos;entreprise Findout.</P>
      <P>Bonne maîtrise de la technologie et de son langage de requête.</P>
    </Skill>
    <Skill logo="agile.svg">
      <Subtitle>Agile &amp; Scrum</Subtitle>
      <P>Familier avec la méthodologie agile et du travail en sprints.</P>
    </Skill>
    <Skill logo="git.svg">
      <Subtitle>Git&nbsp;: Github, BitBucket, Gitlab</Subtitle>
      <P>Utilisation quotidienne de Git depuis 6 ans.</P>
      <P>Bonnes connaissances des plateformes d&apos;hébergement et de l&apos;intégration continue.</P>
    </Skill>
  </div>
);
