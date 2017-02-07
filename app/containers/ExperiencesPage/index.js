import React from 'react';
import Helmet from 'react-helmet';

export default () => (
  <div>
    <Helmet
      title="Work Experiences"
      meta={[
        { name: 'description', content: 'Work experiences of Paulin Trognon, web developper in Lyon' },
      ]}
    />
  </div>
);
