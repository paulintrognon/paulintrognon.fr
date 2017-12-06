import React from 'react';
import Helmet from 'react-helmet';

import Ozed from './Ozed';
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
    <Ozed />
    <Findout />
    <Dcdl />
    <LeonPaul />
  </div>
);
