import { Skill, Title, Subtitle, P } from './_components';

import css from './skills.css';

export default () => (
  <div className={css.skillsGroup}>
    <Title>Développeur Backend</Title>
    <Skill logo="nodejs.svg">
      <Subtitle>Node.js</Subtitle>
      <P>
        6 ans d&apos;expérience de développement de backends et d&apos;API REST
        en Node.js
      </P>
      <P>Connaissances des grands frameworks Node.js : Express, Koa, Meteor.</P>
      <P>Développement d&apos;API Temps réel avec Socket.io</P>
    </Skill>
    <Skill logo="php.svg">
      <Subtitle>PHP&nbsp;: Symfony &amp; Laravel</Subtitle>
      <P>
        Solides connaissances du framework Laravel et connaissances de base du
        framework Symfony
      </P>
      <P>
        À l&apos;aise manière générale avec le PHP, que j&apos;utilise depuis
        près de 10 ans maintenant.
      </P>
    </Skill>
    <Skill logo="servers.svg">
      <Subtitle>Hébergement&nbsp;: Nginx &amp; Apache</Subtitle>
      <P>
        Connaissances de base des serveurs Nginx et Apache (j&apos;utilise Nginx
        pour l&apos;hébergement de mes projets personnels)
      </P>
      <P>
        Utilisation quotidienne de Linux (Debian), qui est l&apos;OS que
        j&apos;utilise pour développer.
      </P>
    </Skill>
  </div>
);
