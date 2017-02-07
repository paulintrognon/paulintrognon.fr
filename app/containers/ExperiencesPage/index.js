import React from 'react';
import Helmet from 'react-helmet';

import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';
import JsLogo from './js.svg';

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
    </Article>
  </div>
);
