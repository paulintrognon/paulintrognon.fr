import React from 'react';
import Helmet from 'react-helmet';

export default () => (
  <div>
    <Helmet
      title="Contact"
      meta={[
        { name: 'description', content: 'Get in touch with me, I always like new adventures!' },
      ]}
    />
  </div>
);
