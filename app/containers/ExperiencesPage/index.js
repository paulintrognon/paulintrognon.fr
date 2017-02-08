import React from 'react';
import Helmet from 'react-helmet';

import FindoutExperience from './Findout';

export default () => (
  <div>
    <Helmet
      title="Work Experiences"
      meta={[
        { name: 'description', content: 'JavaScript Fullstack Developper, Game Developper, Software Developper' },
      ]}
    />
    <FindoutExperience />
  </div>
);
