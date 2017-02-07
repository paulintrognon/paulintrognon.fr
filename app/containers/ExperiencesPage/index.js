import React from 'react';
import Helmet from 'react-helmet';

import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';
import JsLogo from './js.svg';
import ElasticSearchLogo from './elasticsearch.svg';
import RabbitMq from './rabbitmq.svg';

export default () => (
  <div>
    <Helmet
      title="Work Experiences"
      meta={[
        { name: 'description', content: 'JavaScript Fullstack Developper, Game Developper, Software Developper' },
      ]}
    />
    <Article>
      <SectionHead title="Findout Ltd." subtitle="Building a Market Reports Search Engine from scratch" side="Feb. 2014 → Dec. 2016 (3 years)" />
      <Section img={JsLogo} alt="JavaScript logo">
        <h3>Fullstack JavaScript Developper</h3>
        <p>
          I was one of the core developper of the webapp Findout, a keywords-based search engine.
        </p>
        <p>
          This webapp is a Angular frontend talking to many NodeJS APIs. They all had their dedicated database.
          Each API is hosted on a virtual debian server, contained into one big cluster.
        </p>
        <p>
          I designed the architecture of the Node APIs, in order to have one reusable code base for all of our APIs.
        </p>
        <p>
          I implemented several frontend pages, with E2E tests (using protractor), an essential tool for stablity.
        </p>
      </Section>
      <Section img={ElasticSearchLogo} alt="ElasticSearch Logo">
        <h3>Search UX Designer</h3>
        <p>
          Relevency is not an easy challenge for any search engine. Findout had a dedicated team making sure our search algorythm&rsquo;s restuls were as close as possible to our customers expectations.
        </p>
        <p>
          I was a core member of that team, writting full text search algorythms using ElasticSearch, and working to improve the overall user experience with the UI.
        </p>
      </Section>
      <Section img={RabbitMq} alt="RabbitMq logo">
        <h3>Data processing</h3>
        <p>
          Our search corpus was more than 4 millions reports big. We applied a lot of meta tags to those documents to facilitate the search process.
        </p>
        <p>
          To process the reports, we used RabbitMq as our messaging system. I introduced in the company the use of streams in node apps to easily process data.
        </p>
      </Section>
    </Article>
  </div>
);
