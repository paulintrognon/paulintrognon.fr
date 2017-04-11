import React from 'react';
import Helmet from 'react-helmet';

import Findout from './Findout';
import Dcdl from './Dcdl';
import LeonPaul from './LeonPaul';

export default () => (
  <div>
    <Helmet
      title="Réalisations et expériences professionnelles"
      meta={[
        { name: 'description', content: 'Liste de mes travaux et expériences JavaScript, Node, PHP, etc.' },
      ]}
    />
    <Findout />
    <Dcdl />
    <LeonPaul />
  </div>
);
