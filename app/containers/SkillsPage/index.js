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
      title=""
      meta={[
        { name: 'description', content: 'Paulin Trognon is a web developper who loves JavaScript, and the new ways of building the web.' },
      ]}
    />
    <FrontendSkills />
    <BackendSkills />
    <SearchUxSkills />
    <OtherSkills />
  </div>
);
