import React from 'react';

import A from 'components/A';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Article from 'components/Article';
import Section from 'components/Section';

import ElasticsearchLogo from './elasticsearch.svg';

export default () => (
  <Article>
    <H1>
      Search UX Guru
    </H1>
    <Section img={ElasticsearchLogo} alt="elasticsearch logo">
      <H2>ElasticSearch</H2>
      <p>
        I have used ElasticSearch for the last 3 years, and am very familiar with its request synthax, as well as its Javascript API.
      </p>
      <H2>Designing Search</H2>
      <p>
        I have followed those following training courses (by Search Solutions):
        <ul>
          <li><A href="http://designingthesearchexperience.com/">Designing Search</A>, by Tony Russell-Rose</li>
          <li><A href="http://irsg.bcs.org/SearchSolutions/2016/tutorials/EnterpriseEval-FINAL.pdf">Evaluating Search</A>, by Paul Clough</li>
        </ul>
      </p>
    </Section>
  </Article>
);
