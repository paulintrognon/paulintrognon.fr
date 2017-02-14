/*
 * SkillsPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import JavaScriptSkills from './JavaScriptSkills';
import SearchUxSkills from './SearchUxSkills';
import DevOpsSkills from './DevOpsSkills';

export default () => (
  <div>
    <Helmet
      title=""
      meta={[
        { name: 'description', content: 'Node JS, React, Angular, ElasticSearch' },
      ]}
    />
    <JavaScriptSkills />
    <SearchUxSkills />
    <DevOpsSkills />
  </div>
);
