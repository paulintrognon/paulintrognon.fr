import React from 'react';

import AText from 'components/AText';
import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';

import AgileLogo from './agile.svg';
import GitLogo from './git.svg';
import RabbitMqLogo from './rabbitmq.svg';

export default () => (
  <Article>
    <SectionHead title="Autres compétences" />
    <Section img={AgileLogo} alt="agile logo">
      <h3>Agile & Scrum</h3>
      <p>
        Utilisation de la méthode agile
      </p>
      <p>
        3 ans de fonctionnement en Scrums (sprints de 3 semaines)
      </p>
    </Section>
    <Section img={GitLogo} alt="git logo">
      <h3>Git</h3>
      <p>
        Utilisation quotidienne depuis 5 ans
      </p>
      <p>
        Familier avec le pattern <AText href="http://nvie.com/posts/a-successful-git-branching-model/">Git Flow</AText>
      </p>
    </Section>
    <Section img={RabbitMqLogo} alt="rabbitmq logo">
      <h3>RabbitMQ</h3>
      <p>
        Connaissances de bases RabbitMQ, <i>message broker</i> qui permet à différentes applications de pouvoir traiter des données dans un ordre spécifique, et de pouvoir communiquer entre elles.
      </p>
    </Section>
  </Article>
);
