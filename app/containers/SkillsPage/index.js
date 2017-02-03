/*
 * SkillsPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import JavaScriptSkills from './JavascriptSkills';
import SearchUxSkills from './SearchUxSkills';

export default () => (
  <div>
    <JavaScriptSkills />
    <SearchUxSkills />
  </div>
);
