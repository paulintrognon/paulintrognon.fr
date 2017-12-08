import React from 'react';

import Experience from 'components/Experience';
import H1 from 'components/H1';
import Image from './Image';

import { Html5Badge, JQueryBadge, PhpBadge, RedHatBadge } from 'components/TechnologyBadge';
import LeonPaulImg from './leonpaul.jpg';

export default () => (
  <Experience>
    <Image src={LeonPaulImg} href="http://leonpaul.com" alt="Leon Paul Fencing Equipment" />
    <H1>Réécriture complète en PHP 5.4 du système de gestion de commande</H1>
    <div>
      <div className="technology-container">
        <Html5Badge />
        <JQueryBadge />
        <PhpBadge />
        <RedHatBadge />
      </div>
      <ul>
        <li>Refonte complète du CRM de l&#8217;entreprise en PHP orienté objet, avec une architecture inspirée par le framework Symfony</li>
        <li>Hébergement et maintenance du site e-commerce sur un serveur dédié RedHat</li>
        <li>Mise en place d&#8217;outils internes (wiki, gestionnaire de mots de passe) hébergés sur un serveur interne</li>
      </ul>
    </div>
  </Experience>
);
