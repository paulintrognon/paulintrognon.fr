/*
 * SkillsPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import JavaScriptArticle from './JavaScriptArticle';
import SearchUXArticle from './SearchUXArticle';

export default () => (
  <div>
    <JavaScriptArticle />
    <SearchUXArticle />
  </div>
);
