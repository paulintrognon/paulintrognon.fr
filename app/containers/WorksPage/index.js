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
        { name: 'description', content: 'Voir mes travaux et expériences précedentes, réalisés en javascript, en PHP, etc.' },
      ]}
    />
    <Findout />
    <Dcdl />
    <LeonPaul />
  </div>
);
