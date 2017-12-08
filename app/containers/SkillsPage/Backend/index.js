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
    <Section img={NodeJsLogo} alt="nodejs logo">
      <h3>NodeJs</h3>
      <p>
        5 ans d&#8217;expérience en NodeJs (Node 6, ES2015)
      </p>
      <p>
        Développement d&#8217;APIs REST, de serveurs (avec <AText href="http://expressjs.com">Express</AText>)
      </p>
      <p>
        Création d&#8217;utilitaires en ligne de commande (crons, traitement de données)
      </p>
    </Section>
    <Section img={PhpLogo} alt="php logo">
      <h3>PHP</h3>
      <p>
        8 ans d&#8217;expérience en entreprise
      </p>
      <p>
        Maitrise PHP orienté objet, maitrise du framework MVC
      </p>
      <p>
        Expertise Laravel 5.5
      </p>
    </Section>
    <Section img={NginxLogo} alt="nginx logo">
      <h3>Apache & Nginx</h3>
      <p>
        Utilisation d&#8217;Apache & Nginx pour l&#8217;hébergement
      </p>
      <p>
        Bonne connaissance des serveurs Linux, en particulier la distribution Debian (que j&#8217;utilise au quotidien pour développer)
      </p>
    </Section>
  </Article>
);
