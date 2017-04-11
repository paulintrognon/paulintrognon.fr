import React from 'react';

import Experience from 'components/Experience';
import H1 from 'components/H1';
import Image from './Image';

import { DynamoDbBadge, Html5Badge, JQueryBadge, PhpBadge } from 'components/TechnologyBadge';
import findoutImg from './dcdl.jpg';

export default () => (
  <Experience>
    <Image src={findoutImg} href="http://www.france3.fr/emissions/des-chiffres-et-des-lettres/jeu_263721" alt="Des chiffres et des Lettres" />
    <H1>Version web du jeu Des Chiffres et Des Lettres</H1>
    <div>
      <div className="technology-container">
        <Html5Badge />
        <JQueryBadge />
        <PhpBadge />
        <DynamoDbBadge />
      </div>
      <ul>
        <li>Implémentation du frontend du jeu entièrement en HTML et JavaScript</li>
        <li>Architecture du match-making (stockage Amazon DynamoDB, une base NoSQL), designé afin de faire jouer les joueurs les uns contre les autres de manière asynchrone en stockant leur partie.</li>
        <li>Développement du backend en PHP</li>
      </ul>
    </div>
  </Experience>
);
