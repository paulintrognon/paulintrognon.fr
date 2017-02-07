/*
 * SkillsPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import JavaScriptSkills from './JavascriptSkills';
import SearchUxSkills from './SearchUxSkills';

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
  </div>
);
