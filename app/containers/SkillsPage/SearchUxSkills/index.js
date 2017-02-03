import React from 'react';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Article from 'components/Article';
import Img from 'components/Img';
import Paragraph from 'components/Paragraph';

import ElasticsearchLogo from './elasticsearch.svg';

export default () => (
  <Article>
    <H1>
      Search UX Guru
    </H1>
    <Paragraph>
      <Img alt="elasticsearch logo" src={ElasticsearchLogo} />
      <div>
        <H2>ElasticSearch</H2>
        <p>
          I have used ElasticSearch for the last 3 years, and am very familiar with its request synthax, as well as its Javascript API.
        </p>
        <H2>Designing Search</H2>
        <p>
          I have followed those following training courses (by Search Solutions):
          <ul>
            <li>Designing Search, by Tony Russell-Rose</li>
            <li>Evaluating Search, by Paul Clough</li>
          </ul>
        </p>
      </div>
    </Paragraph>
  </Article>
);
