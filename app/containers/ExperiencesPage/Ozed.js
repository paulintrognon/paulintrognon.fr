import React from 'react';

import Experience from 'components/Experience';
import H1 from 'components/H1';
import Image from './Image';

import { AngularBadge, DebianBadge, NodeJsBadge, TypeScriptBadge } from 'components/TechnologyBadge';
import ozedImg from './ozed.jpg';

export default () => (
  <Experience>
    <Image src={ozedImg} alt="Ozed" />
    <H1>Développement d&#8217;un backoffice fullstack JavaScript</H1>
    <div>
      <div className="technology-container">
        <AngularBadge version="4" />
        <TypeScriptBadge />
        <NodeJsBadge />
        <DebianBadge />
      </div>
      <ul>
        <li>Elaboration des interfaces en Angular 4</li>
        <li>Design & implémentation des APIs en NodeJS</li>
        <li>Base de données MariaDB</li>
        <li>Déploiement sur une VM OVH</li>
      </ul>
    </div>
  </Experience>
);
