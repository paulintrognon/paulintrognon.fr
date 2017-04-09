import React from 'react';

import AText from 'components/AText';
import Article from 'components/Article';
import Section from 'components/Section';
import SectionHead from 'components/SectionHead';
import Html5Logo from './html5.svg';

export default () => (
  <Article>
    <SectionHead title="3DDuo" subtitle="Video game developper" side="Jan. 2013 → Jul. 2013 (6 months)" />
    <Section img={Html5Logo} alt="html5 logo">
      <h3>HTML5 Developper</h3>
      <p>
        I was one of the two developpers that built <AText href="http://www.france3.fr/emissions/des-chiffres-et-des-lettres/jeu_263721">a full game in HTML and CSS, for the french TV France 3</AText>.
      </p>
      <p>
        The game was built using jQuery, talking to a remote PHP server. The game data was stored using <AText href="https://aws.amazon.com/dynamodb/">Amazon DynamoDB</AText>.
      </p>
    </Section>
  </Article>
);
