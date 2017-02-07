import React from 'react';

import A from 'components/A';
import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';

import NodeJsLogo from './nodejs.svg';
import ReactJsLogo from './reactjs.svg';
import AngularLogo from './angular.svg';

export default () => (
  <Article>
    <SectionHead title="Javascript Enthousiast" />
    <Section img={NodeJsLogo} alt="nodejs logo">
      <h3>NodeJS</h3>
      <p>
        5 years experience developping node apps.
      </p>
      <p>
        I have mainly built APIs using NodeJS (with <A href="http://restify.com/">Restify</A>, or <A href="http://expressjs.com">Express</A>) but also some CLI tools.
      </p>
    </Section>
    <Section img={AngularLogo} alt="angular logo">
      <h3>Angular 1</h3>
      <p>
        3 years experience developping webapps using Angular 1.
      </p>
      <p>
        I also know E2E testing for this framework using <A href="http://www.protractortest.org/#/">Protractor</A>.
      </p>
    </Section>
    <Section img={ReactJsLogo} alt="reactjs logo">
      <h3>ReactJS</h3>
      <p>
        Still learning ReactJS but I find it awesome. I am using <A href="http://redux.js.org/">Redux</A>.
      </p>
      <p>
        This very website has been developped using the <A href="https://github.com/react-boilerplate/react-boilerplate">React Boilerplate</A>.
        Checkout the code: <A href="https://github.com/paulintrognon/paulintrognon.fr">github.com/paulintrognon/paulintrognon.fr</A>
      </p>
    </Section>
  </Article>
);
