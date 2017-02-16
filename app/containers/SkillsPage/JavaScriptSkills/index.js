import React from 'react';

import AOut from 'components/AOut';
import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';

import NodeJsLogo from './nodejs.svg';
import ReactJsLogo from './reactjs.svg';
import AngularLogo from './angular.svg';

export default () => (
  <Article>
    <SectionHead title="JavaScript Enthousiast" />
    <Section img={NodeJsLogo} alt="nodejs logo">
      <h3>NodeJS</h3>
      <p>
        5 years experience developping node apps.
      </p>
      <p>
        I have mainly built APIs using <AOut href="http://restify.com/">Restify</AOut>, or <AOut href="http://expressjs.com">Express</AOut>. I also built some utility programs such as <AOut href="https://github.com/paulintrognon/la-bonne-alerte">crawlers</AOut>.
      </p>
    </Section>
    <Section img={AngularLogo} alt="angular logo">
      <h3>Angular 1</h3>
      <p>
        3 years experience developping webapps using Angular 1.
      </p>
      <p>
        I also know E2E testing for this framework using <AOut href="http://www.protractortest.org/#/">Protractor</AOut>.
      </p>
    </Section>
    <Section img={ReactJsLogo} alt="reactjs logo">
      <h3>ReactJS</h3>
      <p>
        Still learning ReactJS but I find it awesome.
      </p>
      <p>
        This very website has been developped using the <AOut href="https://github.com/react-boilerplate/react-boilerplate">React Boilerplate</AOut>.
        Checkout the code: <AOut href="https://github.com/paulintrognon/paulintrognon.fr">github.com/paulintrognon/paulintrognon.fr</AOut>
      </p>
    </Section>
  </Article>
);
