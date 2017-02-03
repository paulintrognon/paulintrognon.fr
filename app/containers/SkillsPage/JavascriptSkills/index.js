import React from 'react';

import H1 from 'components/H1';
import H2 from 'components/H2';
import Article from 'components/Article';
import Section from 'components/Section';

import NodeJsLogo from './nodejs.svg';
import ReactJsLogo from './reactjs.svg';
import AngularLogo from './angular.svg';

export default () => (
  <Article>
    <H1>
      Javascript Enthusiast
    </H1>
    <Section img={NodeJsLogo} alt="nodejs logo">
      <H2>NodeJS</H2>
      <p>
        5 years experience developping node apps.
      </p>
      <p>
        I am familiar with the microservices paradigm, and have been building APIs in NodeJS (with Restify, or Express) with this aim in mind.
      </p>
    </Section>
    <Section img={AngularLogo} alt="angular logo">
      <H2>Angular 1</H2>
      <p>
        3 years experience developping webapps using Angular 1.
      </p>
      <p>
        I also know E2E testing for this framework using Protractor.
      </p>
    </Section>
    <Section img={ReactJsLogo} alt="reactjs logo">
      <H2>ReactJS</H2>
      <p>
        Still learning ReactJS but I find it awesome. I am using Redux.
      </p>
      <p>
        This very website has been developped using the React Boilerplate. Checkout the code: github.com/paulintrognon/paulintrognon.fr
      </p>
    </Section>
  </Article>
);
