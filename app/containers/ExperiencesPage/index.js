import React from 'react';
import Helmet from 'react-helmet';

import FindoutExperience from './Findout';
import TDDuoExperience from './3DDuo';
import LeonPaulExperience from './LeonPaul';

export default () => (
  <div>
    <Helmet
      title="Work Experiences"
      meta={[
        { name: 'description', content: 'After 3 years working as a full stack web developper for a data technology / search engine company, I am embracing the freelance experience.' },
      ]}
    />
    <FindoutExperience />
    <TDDuoExperience />
    <LeonPaulExperience />
  </div>
);
