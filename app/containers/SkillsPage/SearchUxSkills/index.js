import React from 'react';

import A from 'components/A';
import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';

import ElasticsearchLogo from './elasticsearch.svg';

export default () => (
  <Article>
    <SectionHead title="Search UX Guru" />
    <Section img={ElasticsearchLogo} alt="elasticsearch logo">
      <h3>ElasticSearch</h3>
      <p>
        I have used ElasticSearch for the last 3 years, and am very familiar with its request synthax, as well as its Javascript API.
      </p>
      <h3>Designing Search</h3>
      <p>
        I have followed those following training courses (by Search Solutions):
      </p>
      <ul>
        <li><A href="http://designingthesearchexperience.com/">Designing Search</A>, by Tony Russell-Rose</li>
        <li><A href="http://irsg.bcs.org/SearchSolutions/2016/tutorials/EnterpriseEval-FINAL.pdf">Evaluating Search</A>, by Paul Clough</li>
      </ul>
    </Section>
  </Article>
);
