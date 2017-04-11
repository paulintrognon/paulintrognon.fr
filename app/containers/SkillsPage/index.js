/*
 * SkillsPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import FrontendSkills from './Frontend';
import BackendSkills from './Backend';
import SearchUxSkills from './SearchUx';
import OtherSkills from './Other';

export default () => (
  <div>
    <Helmet
      title="Compétences"
      meta={[
        { name: 'description', content: 'Développeur web depuis 5 ans, j\'ai acquis une expérience solide dans le développement d\'applications Angular et React. Je suis également spécialiste de NodeJS.' },
      ]}
    />
    <FrontendSkills />
    <BackendSkills />
    <SearchUxSkills />
    <OtherSkills />
  </div>
);
