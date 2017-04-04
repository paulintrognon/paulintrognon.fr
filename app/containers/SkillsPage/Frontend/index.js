import React from 'react';

import AText from 'components/AText';
import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';

import ReactJsLogo from './reactjs.svg';
import AngularLogo from './angular.svg';
import JQueryLogo from './jquery.svg';

export default () => (
  <Article>
    <SectionHead title="Développeur Frontend" />
    <Section img={AngularLogo} alt="angular logo">
      <h3>Angular 1</h3>
      <p>
        3 ans d&#8217;éxperience au sein de l&#8217;entreprise Findout.
      </p>
      <p>
        Développement d&#8217;interfaces, tests unitaires, tests E2E.
      </p>
    </Section>
    <Section img={ReactJsLogo} alt="reactjs logo">
      <h3>ReactJS</h3>
      <p>
        Ce site a été codé en utilisant ReactJS : <AText href="https://github.com/paulintrognon/paulintrognon.fr">github.com/paulintrognon.fr</AText>
      </p>
      <p>
        Je connais depuis peu, mais cette technologie m&#8217;enthousiasme beaucoup.
      </p>
    </Section>
    <Section img={JQueryLogo} alt="jquery logo">
      <h3>JQuery</h3>
      <p>
        Très à l&#8217;aise avec ce framework, pour l&#8217;avoir utilisé dans plusieurs projets pro.
      </p>
      <p>
        Je maitrise de manière général le JavaScript côté Frontend.
      </p>
    </Section>
  </Article>
);
