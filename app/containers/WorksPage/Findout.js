import React from 'react';

import Experience from 'components/Experience';
import H1 from 'components/H1';
import Image from './Image';

import { AngularBadge, DebianBadge, ElasticSearchBadge, NodeJsBadge } from 'components/TechnologyBadge';
import findoutImg from './findout.jpg';

export default () => (
  <Experience>
    <Image src={findoutImg} href="https://findout.com" alt="findout" />
    <H1>Développement d&#8217;un moteur de recherche</H1>
    <div>
      <div className="technology-container">
        <AngularBadge />
        <NodeJsBadge />
        <ElasticSearchBadge />
        <DebianBadge />
      </div>
      <ul>
        <li>Elaboration des interfaces en Angular 1</li>
        <li>Ecriture des tests unitaires & E2E (avec Protractor)</li>
        <li>Design & implémentation des APIs en NodeJS</li>
        <li>Ecriture des algorithmes de recherche ElasticSearch</li>
      </ul>
    </div>
  </Experience>
);
