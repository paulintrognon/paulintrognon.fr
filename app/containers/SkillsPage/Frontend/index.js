import React from 'react';

import AText from 'components/AText';
import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';

import ReactJsLogo from './reactjs.svg';
import AngularLogo from './angular.svg';
import JQueryLogo from './jquery.svg';
import Css3Logo from './css.svg';

export default () => (
  <Article>
    <SectionHead title="Développeur Frontend" />
    <Section img={AngularLogo} alt="angular logo">
      <h3>Angular 1</h3>
      <p>
        3 ans d&#8217;éxperience au sein de l&#8217;entreprise <AText href="https://findout.com">Findout</AText>
      </p>
      <p>
        Développement d&#8217;interfaces, avec tests unitaires et tests E2E
      </p>
    </Section>
    <Section img={ReactJsLogo} alt="reactjs logo">
      <h3>ReactJS</h3>
      <p>
        Ce site a été codé en ReactJS : <AText href="https://github.com/paulintrognon/paulintrognon.fr">github.com/paulintrognon.fr</AText>
      </p>
      <p>
        Je suis en cours de formation, et cette technologie m&#8217;enthousiasme beaucoup
      </p>
    </Section>
    <Section img={JQueryLogo} alt="jquery logo">
      <h3>JQuery</h3>
      <p>
        Très à l&#8217;aise avec ce framework, pour l&#8217;avoir utilisé dans plusieurs projets pro
      </p>
      <p>
        Je maitrise de manière générale le JavaScript côté Frontend
      </p>
    </Section>
    <Section img={Css3Logo} alt="css3 logo">
      <h3>CSS 3 & responsive</h3>
      <p>
        Bonnes connaissances en CSS3, maitrise des medias queries (possibilité de rendre un site responsive)
      </p>
    </Section>
  </Article>
);
