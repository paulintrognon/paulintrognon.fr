import { Skill, Title, Subtitle, P } from './_components';

import css from './skills.css';

export default () => (
  <div className={css.skillsGroup}>
    <Title>Développeur Backend</Title>
    <Skill logo="nodejs.svg">
      <Subtitle>Node.js</Subtitle>
      <P>6 ans d&apos;expérience en développement de backends et d&apos;API REST en Node.js</P>
      <P>Expert du framework Express</P>
      <P>Initié aux APIs temps réel avec Socket.io</P>
    </Skill>
    <Skill logo="php.svg">
      <Subtitle>PHP&nbsp;: Laravel &amp; Symfony</Subtitle>
      <P>Solides connaissances des framework Laravel et Symfony.</P>
      <P>À l&apos;aise manière générale avec le PHP, que j&apos;utilise depuis près de 10 ans maintenant.</P>
    </Skill>
    <Skill logo="servers.svg">
      <Subtitle>DevOps</Subtitle>
      <P>Familier avec Docker, Nginx et Apache</P>
      <P>Utilisation quotidienne de Linux (Debian), qui est l&apos;OS que j&apos;utilise pour développer.</P>
    </Skill>
  </div>
);
