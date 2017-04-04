import React from 'react';

import AText from 'components/AText';
import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';

import NodeJsLogo from './nodejs.svg';
import PhpLogo from './php.svg';
import NginxLogo from './servers.svg';

export default () => (
  <Article>
    <SectionHead title="Développeur Backend" />
    <Section img={PhpLogo} alt="php logo">
      <h3>PHP</h3>
      <p>
        8 ans d&#8217;éxperience en entreprise
      </p>
      <p>
        Développement complet d&#8217;un CRM, connaissances sur Symfony
      </p>
    </Section>
    <Section img={NodeJsLogo} alt="nodejs logo">
      <h3>NodeJs</h3>
      <p>
        5 ans d&#8217;éxperience en NodeJs (Node 6, ES2015)
      </p>
      <p>
        Développement d&#8217;APIs REST, de serveurs (<AText href="http://expressjs.com">Express</AText>)
      </p>
      <p>
        Création d&#8217;utilisatires en ligne de commande (crons, traitement de données)
      </p>
    </Section>
    <Section img={NginxLogo} alt="nginx logo">
      <h3>Apache & Nginx</h3>
      <p>
        Utilisation d&#8217;Apache & Nginx pour l&#8217;hébergement
      </p>
      <p>
        Bonne connaissance des serveurs Linux : en particulier la distrib debian
      </p>
    </Section>
  </Article>
);
