import React from 'react';

import AText from 'components/AText';
import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';

import ElasticsearchLogo from './elasticsearch.svg';

export default () => (
  <Article>
    <SectionHead title="Guru Search UX" />
    <Section img={ElasticsearchLogo} alt="elasticsearch logo">
      <h3>ElasticSearch</h3>
      <p>
        3 ans d&#8217;expertise ElasticSearch au sein de l&#8217;entreprise <AText href="https://findout.com">Findout</AText>
      </p>
      <p>
        Bonne maîtrise du moteur de recherche, et de son language de requête
      </p>
      <h3>Architecture de la recherche</h3>
      <p>
        J&#8217;ai suivi les formations suivantes:
      </p>
      <ul>
        <li><AText href="http://designingthesearchexperience.com/">Designing Search</AText>, par Tony Russell-Rose</li>
        <li><AText href="http://irsg.bcs.org/SearchSolutions/2016/tutorials/EnterpriseEval-FINAL.pdf">Evaluating Search</AText>, par Paul Clough</li>
      </ul>
    </Section>
  </Article>
);
