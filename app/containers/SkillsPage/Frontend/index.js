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
      <h3>Angular 1 à 4</h3>
      <p>
        3 ans d&#8217;expérience au sein de l&#8217;entreprise <AText href="https://findout.com">Findout</AText>
      </p>
      <p>
        Développement d&#8217;interfaces, avec tests unitaires et tests E2E
      </p>
      <p>
        Développement d&#8217;une de type back-office en Angular 4
      </p>
    </Section>
    <Section img={ReactJsLogo} alt="reactjs logo">
      <h3>ReactJS</h3>
      <p>
        C&#8217;est avec cette technologie, qui m&#8217;enthousiasme beaucoup, que je réalise mes projets personnels,
        comme <AText href="http://www.music-genres.com">music-genres</AText>, ou <AText href="https://plouf-plouf.fr">Plouf Plouf</AText>.
      </p>
      <p>
        J&#8217;utilise le pattern Redux
      </p>
    </Section>
    <Section img={JQueryLogo} alt="jquery logo">
      <h3>Technologies traditionnelles</h3>
      <p>
        Je suis très à l&#8217;aise avec jQuery, pour l&#8217;avoir utilisé dans plusieurs projets pro ; Je maitrise de manière générale le JavaScript côté Frontend
      </p>
      <p>
        Bonnes connaissances en CSS3, maitrise des medias queries (possibilité de rendre un site responsive)
      </p>
    </Section>
  </Article>
);
