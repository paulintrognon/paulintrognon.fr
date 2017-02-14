import React from 'react';

import A from 'components/A';
import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';
import JsLogo from './js.svg';
import ElasticSearchLogo from './elasticsearch.svg';
import RabbitMq from './rabbitmq.svg';

export default () => (
  <Article>
    <SectionHead title="Findout Ltd." subtitle="Building a Market Reports Search Engine from scratch" side="Feb. 2014 → Dec. 2016 (3 years)" />
    <Section img={JsLogo} alt="JavaScript logo">
      <h3>Fullstack JavaScript Developper</h3>
      <p>
        I was one of the core developper of the webapp <A href="https://findout.com/">Findout</A>, a market reports search engine.
      </p>
      <p>
        The webapp is a Angular frontend talking to many NodeJS APIs. They all have their dedicated database.
        Each API is hosted on a virtual debian server, contained into one big cluster.
      </p>
      <p>
        I designed the architecture of the Node APIs, having in mind reusability of the code base for all of our APIs.
      </p>
      <p>
        I implemented several frontend pages, with their E2E tests (using protractor), which improved stability a lot.
      </p>
    </Section>
    <Section img={ElasticSearchLogo} alt="ElasticSearch Logo">
      <h3>Search UX Designer</h3>
      <p>
        Relevency is a great challenge for any search engine. Findout had a dedicated Search UX team making sure our search algorythm&rsquo;s results were as close as possible to our customers expectations.
      </p>
      <p>
      </p>
      I was a core member of that team, writing full text search algorythms using <A href="https://www.elastic.co/products/elasticsearch">ElasticSearch</A>, and working on improving the overall user experience.
    </Section>
    <Section img={RabbitMq} alt="RabbitMq logo">
      <h3>Data processing</h3>
      <p>
        Our search corpus was more than 4 millions reports big. We added a lot of meta tags to those documents to facilitate the search process.
      </p>
      <p>
        To process the reports, we used <A href="https://www.rabbitmq.com/">RabbitMQ</A> as our messaging system. I introduced in the company the use of streams in node apps to easily process data.
      </p>
    </Section>
  </Article>
);
